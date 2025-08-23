#!/usr/bin/env python3
"""
Simple test script to demonstrate agent logging functionality
"""
import asyncio
import os
import sys

# Add the vibetest module to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'vibetest'))

from browser_sense.agents import run_pool

async def test_logging():
    """Test the logging functionality with a simple website"""
    print("Testing agent logging functionality...")
    print("Check the console output and agent_logs.log file for detailed logs")
    
    try:
        # Run a small test with 2 agents on a simple website
        test_id = await run_pool(
            base_url="http://localhost:3000/",
            num_agents=1,
            headless=False
        )
        print(f"\nTest completed successfully! Test ID: {test_id}")
        # print("Check agent_logs.log for detailed logging output")
        
    except Exception as e:
        print(f"Test failed with error: {e}")
        print("Make sure you have API key set in your environment")

if __name__ == "__main__":
    asyncio.run(test_logging())