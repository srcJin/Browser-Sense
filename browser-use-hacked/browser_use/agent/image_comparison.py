"""
Image comparison service for comparing screenshots with reference images.
"""
import base64
import os
from pathlib import Path
from typing import List, Optional, Tuple

from browser_use.llm.messages import ContentPartImageParam, ContentPartTextParam, ImageURL


class ImageComparisonService:
    """Service for comparing screenshots with reference images from sketch folder."""
    
    def __init__(self, sketch_folder_path: str = "sketch"):
        """
        Initialize the image comparison service.
        
        Args:
            sketch_folder_path: Path to the folder containing reference images
        """
        self.sketch_folder_path = Path(sketch_folder_path)
        self._reference_images: Optional[List[Tuple[str, str]]] = None  # (filename, base64_data)
    
    def _load_reference_images(self) -> List[Tuple[str, str]]:
        """
        Load all reference images from the sketch folder.
        
        Returns:
            List of tuples containing (filename, base64_encoded_image_data)
        """
        if self._reference_images is not None:
            return self._reference_images
            
        reference_images = []
        
        if not self.sketch_folder_path.exists():
            return reference_images
            
        # Support common image formats
        supported_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp'}
        
        for image_file in self.sketch_folder_path.iterdir():
            if image_file.is_file() and image_file.suffix.lower() in supported_extensions:
                try:
                    with open(image_file, 'rb') as f:
                        image_data = f.read()
                        base64_data = base64.b64encode(image_data).decode('utf-8')
                        reference_images.append((image_file.name, base64_data))
                except Exception as e:
                    print(f"Warning: Could not load reference image {image_file}: {e}")
                    continue
        
        self._reference_images = reference_images
        return reference_images
    
    def get_reference_images_for_comparison(self) -> List[ContentPartImageParam]:
        """
        Get reference images formatted for LLM comparison.
        
        Returns:
            List of ContentPartImageParam objects for the reference images
        """
        reference_images = self._load_reference_images()
        content_parts = []
        
        for filename, base64_data in reference_images:
            # Determine media type based on file extension
            extension = Path(filename).suffix.lower()
            if extension == '.png':
                media_type = 'image/png'
            elif extension in ['.jpg', '.jpeg']:
                media_type = 'image/jpeg'
            elif extension == '.gif':
                media_type = 'image/gif'
            elif extension == '.bmp':
                media_type = 'image/bmp'
            elif extension == '.webp':
                media_type = 'image/webp'
            else:
                media_type = 'image/png'  # Default fallback
            
            content_parts.append(
                ContentPartImageParam(
                    image_url=ImageURL(
                        url=f'data:{media_type};base64,{base64_data}',
                        media_type=media_type,
                        detail='auto',
                    ),
                )
            )
        
        return content_parts
    
    def get_comparison_prompt_text(self) -> str:
        """
        Get the text prompt for image comparison.
        
        Returns:
            String containing instructions for comparing images
        """
        reference_images = self._load_reference_images()
        
        if not reference_images:
            return ""
        
        filenames = [filename for filename, _ in reference_images]
        filenames_text = ", ".join(filenames)
        
        return f"""
Reference images for comparison ({filenames_text}):
Please compare the current screenshot with the reference images above. Consider:
- Visual similarity and layout matching
- UI element positioning and styling
- Color schemes and design consistency
- Content alignment and structure
- Any significant differences or improvements needed

Use this comparison to inform your actions and decisions."""
    
    def has_reference_images(self) -> bool:
        """
        Check if there are any reference images available.
        
        Returns:
            True if reference images are available, False otherwise
        """
        reference_images = self._load_reference_images()
        return len(reference_images) > 0
    
    def get_reference_image_names(self) -> List[str]:
        """
        Get the names of all reference images.
        
        Returns:
            List of reference image filenames
        """
        reference_images = self._load_reference_images()
        return [filename for filename, _ in reference_images]