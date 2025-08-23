"""
Enhanced screenshot storage service for browser-use agents with organized folder structure.
"""

import base64
import json
from datetime import datetime
from pathlib import Path
from typing import Optional
from urllib.parse import urlparse

import anyio


class ScreenshotService:
	"""Enhanced screenshot storage service with organized folder structure
	
	Supports both legacy temp storage and organized persistent storage for BrowserSense.
	"""

	def __init__(self, agent_directory: str | Path, organized_storage: Optional[dict] = None):
		"""Initialize with agent directory path and optional organized storage config
		
		Args:
			agent_directory: Base directory for screenshots (legacy mode)
			organized_storage: Dict with keys: base_dir, test_id, agent_name, url
		"""
		self.agent_directory = Path(agent_directory) if isinstance(agent_directory, str) else agent_directory
		self.organized_storage = organized_storage
		
		if organized_storage:
			# Organized storage mode for BrowserSense
			self._setup_organized_storage(organized_storage)
		else:
			# Legacy mode - simple screenshots subdirectory
			self.screenshots_dir = self.agent_directory / 'screenshots'
			self.screenshots_dir.mkdir(parents=True, exist_ok=True)

	def _setup_organized_storage(self, config: dict) -> None:
		"""Setup organized folder structure for BrowserSense"""
		base_dir = Path(config.get('base_dir', './browser_sense_results'))
		test_id = config.get('test_id', 'unknown')
		agent_name = config.get('agent_name', 'agent')
		url = config.get('url', '')
		
		# Create timestamp for session
		timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
		session_name = f"{test_id}_{timestamp}"
		
		# Create organized directory structure
		self.session_dir = base_dir / 'test_sessions' / session_name
		self.screenshots_dir = self.session_dir / 'qa_agents' / agent_name
		self.screenshots_dir.mkdir(parents=True, exist_ok=True)
		
		# Store metadata
		self.metadata = {
			'test_id': test_id,
			'agent_name': agent_name,
			'url': url,
			'timestamp': timestamp,
			'domain': urlparse(url).netloc if url else 'unknown'
		}
		
		# Save metadata to session directory
		metadata_path = self.session_dir / 'metadata.json'
		metadata_path.parent.mkdir(parents=True, exist_ok=True)
		with open(metadata_path, 'w') as f:
			json.dump(self.metadata, f, indent=2)

	async def store_screenshot(self, screenshot_b64: str, step_number: int, action_description: str = '') -> str:
		"""Store screenshot to disk and return the full path as string"""
		if self.organized_storage:
			# Enhanced naming with action description
			action_suffix = f"_{action_description.replace(' ', '_')}" if action_description else ''
			screenshot_filename = f'step_{step_number:03d}{action_suffix}.png'
		else:
			# Legacy naming
			screenshot_filename = f'step_{step_number}.png'
		
		screenshot_path = self.screenshots_dir / screenshot_filename

		# Decode base64 and save to disk
		screenshot_data = base64.b64decode(screenshot_b64)

		async with await anyio.open_file(screenshot_path, 'wb') as f:
			await f.write(screenshot_data)

		# Store additional metadata for organized storage
		if self.organized_storage:
			self._store_screenshot_metadata(screenshot_path, step_number, action_description)
		
		return str(screenshot_path)
	
	def _store_screenshot_metadata(self, screenshot_path: Path, step_number: int, action_description: str) -> None:
		"""Store metadata about the screenshot for organized storage"""
		metadata = {
			'step_number': step_number,
			'action_description': action_description,
			'timestamp': datetime.now().isoformat(),
			'filename': screenshot_path.name
		}
		
		metadata_file = screenshot_path.parent / f'{screenshot_path.stem}_metadata.json'
		with open(metadata_file, 'w') as f:
			json.dump(metadata, f, indent=2)

	async def get_screenshot(self, screenshot_path: str) -> str | None:
		"""Load screenshot from disk path and return as base64"""
		if not screenshot_path:
			return None

		path = Path(screenshot_path)
		if not path.exists():
			return None

		# Load from disk and encode to base64
		async with await anyio.open_file(path, 'rb') as f:
			screenshot_data = await f.read()

		return base64.b64encode(screenshot_data).decode('utf-8')
	
	def get_session_directory(self) -> str:
		"""Get the session directory path for organized storage"""
		if self.organized_storage and hasattr(self, 'session_dir'):
			return str(self.session_dir)
		return str(self.agent_directory)
	
	def get_screenshots_summary(self) -> dict:
		"""Get summary of all screenshots in this session"""
		screenshots = []
		for screenshot_file in self.screenshots_dir.glob('*.png'):
			metadata_file = screenshot_file.parent / f'{screenshot_file.stem}_metadata.json'
			metadata = {}
			if metadata_file.exists():
				with open(metadata_file, 'r') as f:
					metadata = json.load(f)
			
			screenshots.append({
				'filename': screenshot_file.name,
				'path': str(screenshot_file),
				'size_bytes': screenshot_file.stat().st_size,
				**metadata
			})
		
		return {
			'total_screenshots': len(screenshots),
			'session_directory': self.get_session_directory(),
			'screenshots': sorted(screenshots, key=lambda x: x.get('step_number', 0))
		}