#!/usr/bin/env python3
"""
Grid Browser Launcher Script
Opens 6 different browsers in a 2x3 grid layout on screen
Supports Chrome, Firefox, Safari, Edge, Opera, and Brave

Usage: python3 GridBrowserLauncher.py
"""

import subprocess
import time
import sys

# Screen dimensions (will be auto-detected)
SCREEN_WIDTH = 600  # Default fallback
SCREEN_HEIGHT = 480  # Default fallback

# Calculate grid dimensions (1x3 horizontal split)
WINDOW_WIDTH = SCREEN_WIDTH // 3
WINDOW_HEIGHT = SCREEN_HEIGHT

# Grid positions for 3 browsers side by side (exact 1/3 positioning)
GRID_POSITIONS = [
    (0, 0),                                    # Left: 0 to 1/3
    (SCREEN_WIDTH // 3, 0),                    # Center: 1/3 to 2/3  
    (SCREEN_WIDTH * 2 // 3, 0),                # Right: 2/3 to end
]

def launch_chrome_with_position(x, y, url='http://localhost:3000/'):
    """Launch Chrome at specific position with specified URL"""
    try:
        # Create a unique profile to avoid session conflicts
        import time
        profile_dir = f'/tmp/chrome_grid_{int(time.time())}_{x}_{y}'
        subprocess.run(['mkdir', '-p', profile_dir], check=False)
        
        subprocess.Popen([
            '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            '--new-window',
            '--no-first-run',
            '--no-default-browser-check',
            '--disable-default-apps',
            '--disable-extensions',
            f'--user-data-dir={profile_dir}',
            f'--window-position={x},{y}',
            f'--window-size={WINDOW_WIDTH},{WINDOW_HEIGHT}',
            url
        ])
        print(f"  ✅ Chrome launched at ({x}, {y}) with size {WINDOW_WIDTH}x{WINDOW_HEIGHT}")
        return True
    except FileNotFoundError:
        print(f"  ❌ Chrome not found at expected location")
        return False
    except Exception as e:
        print(f"  ❌ Error launching Chrome: {e}")
        return False

def launch_firefox_with_position(x, y, url='http://localhost:3000/'):
    """Launch Firefox Developer Edition at specific position with specified URL"""
    try:
        subprocess.Popen([
            '/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox',
            '--new-instance',
            '--width', str(WINDOW_WIDTH),
            '--height', str(WINDOW_HEIGHT),
            url
        ])
        
        # Try to position Firefox window using AppleScript
        time.sleep(4)  # Wait for Firefox to fully start
        try:
            applescript = f'''
            tell application "Firefox Developer Edition"
                activate
                set bounds of front window to {{{x}, {y}, {x + WINDOW_WIDTH}, {y + WINDOW_HEIGHT}}}
            end tell
            '''
            result = subprocess.run(['osascript', '-e', applescript], capture_output=True, text=True)
            if result.returncode != 0:
                print(f"  ⚠️  Could not position Firefox window (accessibility permission needed)")
        except Exception:
            print(f"  ⚠️  Could not position Firefox window")
        
        print(f"  ✅ Firefox Developer Edition launched at ({x}, {y})")
        return True
    except FileNotFoundError:
        print(f"  ❌ Firefox Developer Edition not found at expected location")
        return False
    except Exception as e:
        print(f"  ❌ Error launching Firefox Developer Edition: {e}")
        return False

def launch_safari_with_position(x, y, url='http://localhost:3002/'):
    """Launch Safari at specific position with specified URL"""
    try:
        # Launch Safari with URL directly
        subprocess.Popen([
            'open', '-n', '-a', 'Safari', url
        ])
        
        # Wait longer for Safari to fully load
        time.sleep(4)
        
        # Try multiple AppleScript approaches
        positioning_success = False
        
        # Method 1: Direct Safari application control
        try:
            applescript = f'''
            tell application "Safari"
                activate
                delay 1
                set bounds of front window to {{{x}, {y}, {x + WINDOW_WIDTH}, {y + WINDOW_HEIGHT}}}
            end tell
            '''
            result = subprocess.run(['osascript', '-e', applescript], capture_output=True, text=True)
            if result.returncode == 0:
                positioning_success = True
        except Exception:
            pass
        
        # Method 2: System Events fallback
        if not positioning_success:
            try:
                applescript = f'''
                tell application "System Events"
                    tell process "Safari"
                        set frontmost to true
                        delay 1
                        set position of front window to {{{x}, {y}}}
                        set size of front window to {{{WINDOW_WIDTH}, {WINDOW_HEIGHT}}}
                    end tell
                end tell
                '''
                result = subprocess.run(['osascript', '-e', applescript], capture_output=True, text=True)
                if result.returncode == 0:
                    positioning_success = True
            except Exception:
                pass
        
        if not positioning_success:
            print(f"  ⚠️  Safari launched but positioning failed (check accessibility permissions)")
        else:
            print(f"  ✅ Safari launched and positioned at ({x}, {y})")
        
        return True
    except Exception as e:
        print(f"  ❌ Error launching Safari: {e}")
        return False

def launch_edge_with_position(x, y, url='http://localhost:3000/'):
    """Launch Microsoft Edge at specific position with specified URL"""
    try:
        subprocess.Popen([
            '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
            '--new-window',
            '--no-first-run',
            '--no-default-browser-check',
            f'--window-position={x},{y}',
            f'--window-size={WINDOW_WIDTH},{WINDOW_HEIGHT}',
            url
        ])
        print(f"  ✅ Edge launched at ({x}, {y})")
        return True
    except FileNotFoundError:
        print(f"  ❌ Edge not found at expected location")
        return False
    except Exception as e:
        print(f"  ❌ Error launching Edge: {e}")
        return False

def launch_opera_with_position(x, y, url='http://localhost:3000/'):
    """Launch Opera at specific position with specified URL"""
    try:
        subprocess.Popen([
            '/Applications/Opera.app/Contents/MacOS/Opera',
            '--new-window',
            f'--window-position={x},{y}',
            f'--window-size={WINDOW_WIDTH},{WINDOW_HEIGHT}',
            url
        ])
        print(f"  ✅ Opera launched at ({x}, {y})")
        return True
    except FileNotFoundError:
        print(f"  ❌ Opera not found at expected location")
        return False
    except Exception as e:
        print(f"  ❌ Error launching Opera: {e}")
        return False

def launch_brave_with_position(x, y, url='http://localhost:3000/'):
    """Launch Brave at specific position with specified URL"""
    try:
        subprocess.Popen([
            '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
            '--new-window',
            '--no-first-run',
            '--no-default-browser-check',
            f'--window-position={x},{y}',
            f'--window-size={WINDOW_WIDTH},{WINDOW_HEIGHT}',
            url
        ])
        print(f"  ✅ Brave launched at ({x}, {y})")
        return True
    except FileNotFoundError:
        print(f"  ❌ Brave not found at expected location")
        return False
    except Exception as e:
        print(f"  ❌ Error launching Brave: {e}")
        return False

def check_browser_availability():
    """Check which browsers are installed on the system"""
    browsers = {
        'Chrome': '/Applications/Google Chrome.app',
        'Firefox': '/Applications/Firefox Developer Edition.app',
        'Safari': '/Applications/Safari.app',
        'Edge': '/Applications/Microsoft Edge.app',
        'Opera': '/Applications/Opera.app',
        'Brave': '/Applications/Brave Browser.app'
    }
    
    available_browsers = []
    for name, path in browsers.items():
        try:
            result = subprocess.run(['test', '-d', path], capture_output=True)
            if result.returncode == 0:
                available_browsers.append(name)
        except Exception:
            pass
    
    return available_browsers

def get_browser_launcher_functions():
    """Get mapping of browser names to their launcher functions"""
    return {
        'Chrome': launch_chrome_with_position,
        'Firefox': launch_firefox_with_position,
        'Safari': launch_safari_with_position,
        'Edge': launch_edge_with_position,
        'Opera': launch_opera_with_position,
        'Brave': launch_brave_with_position
    }

def detect_screen_resolution():
    """Detect logical screen resolution using osascript for accurate Retina handling"""
    try:
        # Use AppleScript to get the actual usable screen dimensions
        applescript = '''
        tell application "Finder"
            set screenSize to bounds of window of desktop
            set screenWidth to (item 3 of screenSize) - (item 1 of screenSize)
            set screenHeight to (item 4 of screenSize) - (item 2 of screenSize)
            return screenWidth & "x" & screenHeight
        end tell
        '''
        result = subprocess.run(['osascript', '-e', applescript], capture_output=True, text=True)
        
        if result.returncode == 0 and 'x' in result.stdout.strip():
            resolution = result.stdout.strip()
            parts = resolution.split('x')
            width = int(parts[0])
            height = int(parts[1])
            return width, height
            
    except Exception as e:
        print(f"AppleScript resolution detection failed: {e}")
    
    # Fallback: Try system_profiler but adjust for common Retina scaling
    try:
        result = subprocess.run([
            'system_profiler', 'SPDisplaysDataType'
        ], capture_output=True, text=True)
        
        lines = result.stdout.split('\n')
        for line in lines:
            if 'Resolution:' in line:
                resolution = line.split('Resolution:')[1].strip()
                if 'x' in resolution:
                    parts = resolution.split('x')
                    if len(parts) >= 2:
                        width = int(parts[0].strip())
                        height_part = parts[1].strip().split()[0]
                        height = int(height_part)
                        
                        # For Retina displays, browsers use logical resolution (half the physical)
                        if 'Retina' in line or width > 2000:
                            width = width // 2
                            height = height // 2
                            
                        return width, height
    except Exception as e:
        print(f"Could not detect screen resolution: {e}")
    
    # Return default if detection fails
    return 1920, 1080

def print_banner():
    """Print application banner"""
    print("")
    print("🌐 Grid Browser Launcher v4.0")
    print("═" * 50)
    print("📱 Multi-language testing with 3 browsers")
    print("🔧 Auto-detects screen resolution")
    print("🎯 Precise window positioning")
    print("🌐 English • Chinese • Arabic (RTL)")
    print("═" * 50)
    print("")

def main():
    """Main function to launch browsers in grid layout"""
    global SCREEN_WIDTH, SCREEN_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT, GRID_POSITIONS
    
    print_banner()
    
    # Detect screen resolution
    SCREEN_WIDTH, SCREEN_HEIGHT = detect_screen_resolution()
    print(f"🖥️  Detected screen resolution: {SCREEN_WIDTH}x{SCREEN_HEIGHT}")
    
    # Recalculate grid dimensions
    WINDOW_WIDTH = SCREEN_WIDTH // 3
    WINDOW_HEIGHT = SCREEN_HEIGHT
    
    # Update grid positions with exact 1/3 calculations
    GRID_POSITIONS = [
        (0, 0),                                    # Left: 0 to 1/3
        (SCREEN_WIDTH // 3, 0),                    # Center: 1/3 to 2/3  
        (SCREEN_WIDTH * 2 // 3, 0),                # Right: 2/3 to end
    ]
    
    print(f"📐 Window size: {WINDOW_WIDTH}x{WINDOW_HEIGHT}")
    print(f"🔲 Layout: 3 browsers side by side")
    print()
    
    # Check which browsers are available
    available_browsers = check_browser_availability()
    launcher_functions = get_browser_launcher_functions()
    
    print(f"🔍 Available browsers: {', '.join(available_browsers)}")
    
    if not available_browsers:
        print("❌ No supported browsers found!")
        return
    
    # Create browser list with available browsers (up to 3)
    preferred_order = ['Chrome', 'Safari', 'Firefox']
    browsers_to_launch = []
    
    # First, add browsers in preferred order if available
    for browser_name in preferred_order:
        if browser_name in available_browsers and browser_name in launcher_functions:
            browsers_to_launch.append((browser_name, launcher_functions[browser_name]))
            if len(browsers_to_launch) >= 3:
                break
    
    # Fill remaining slots with any other available browsers
    for browser_name in available_browsers:
        if len(browsers_to_launch) >= 3:
            break
        if browser_name not in [b[0] for b in browsers_to_launch] and browser_name in launcher_functions:
            browsers_to_launch.append((browser_name, launcher_functions[browser_name]))
    
    # Language URLs mapping for test_website_2_color
    language_urls = [
        'http://localhost:3002/en',       # English for first browser
        'http://localhost:3002/zh',       # Chinese for second browser  
        'http://localhost:3002/ar'        # Arabic for third browser
    ]
    
    language_names = ['English', 'Chinese', 'Arabic']
    
    print(f"🚀 Launching {len(browsers_to_launch)} browsers with different languages...")
    print()
    
    for i, (browser_name, launch_func) in enumerate(browsers_to_launch):
        if i >= 3:  # Safety check for 3-browser layout
            break
            
        x, y = GRID_POSITIONS[i]
        url = language_urls[i] if i < len(language_urls) else 'http://localhost:3002/'
        language = language_names[i] if i < len(language_names) else 'Default'
        
        print(f"📍 Launching {browser_name} at position ({x}, {y}) with {language}...")
        success = launch_func(x, y, url)
        if not success:
            print(f"  ⚠️  {browser_name} failed to launch, continuing with others...")
        time.sleep(2)  # Increased delay between launches for stability
    
    print()
    print("═" * 50)
    print("🎉 Grid layout complete!")
    print()
    # Create dynamic layout display
    print("📋 Layout:")
    print("┌─────────┬─────────┬─────────┐")
    
    # Single row of 3 browsers
    row = "│"
    for i in range(3):
        if i < len(browsers_to_launch):
            browser_name = browsers_to_launch[i][0]
            row += f" {browser_name:^7} │"
        else:
            row += "   ---   │"
    print(row)
    
    print("└─────────┴─────────┴─────────┘")
    print()
    print(f"✨ Total: {len(browsers_to_launch)} browsers launched in {SCREEN_WIDTH}x{SCREEN_HEIGHT} split screen")
    print("💡 Tip: Use Cmd+Tab to switch between browsers")
    if len(available_browsers) > len(browsers_to_launch):
        print(f"📝 Note: {len(available_browsers) - len(browsers_to_launch)} additional browsers available but not launched (split screen limit: 3)")
    print()

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n⚠️  Launcher interrupted by user")
        sys.exit(0)
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)
