# Game Manual Website Design Guidelines

## Design Approach
**Reference-Based: Minecraft-Inspired Block World**
Drawing inspiration from Minecraft's bright, blocky aesthetic and gaming documentation sites like Minecraft Wiki and game tutorial pages. Focus on playful, accessible design that makes learning fun.

## Design Principles
- **Pixelated Playfulness**: Embrace blocky, geometric shapes throughout
- **Bright & Inviting**: High-contrast, vibrant colors that energize
- **Clear Hierarchy**: Make learning progression obvious and intuitive
- **Visual Learning**: Heavy use of images, icons, and videos to complement text

## Typography
- **Headings**: Blocky, pixel-style font (e.g., Press Start 2P from Google Fonts) for main titles
- **Body Text**: Clean sans-serif (Roboto or Inter) at 16-18px for readability
- **Section Headers**: Bold, uppercase styling with letter-spacing
- **Code/Game Terms**: Monospace font for technical elements

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16 (p-4, m-6, gap-8, py-12, etc.)
- Consistent section padding: py-12 mobile, py-16 desktop
- Component gaps: gap-6 for cards, gap-4 for list items
- Container max-width: max-w-6xl for main content

## Core Components

### Navigation
- Sticky top bar with pixelated border-bottom (4px solid)
- Block-style nav items with sharp edges
- Logo area featuring game icon/title
- Jump-to-section links for quick navigation

### Hero Section
- Full-width banner featuring game screenshot or block world scene
- Large pixelated heading introducing the game
- Pixel-art style decorative elements (grass blocks, clouds)
- Primary CTA button: "開始學習" (Start Learning)

### Game Content Section
- Card-based layout for game features (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each card: icon (pixel art), title, description
- Features: game background, objectives, special mechanics
- Bordered cards with shadow effects mimicking 3D blocks

### Video Player Section
- Centered 16:9 aspect ratio video embed area
- YouTube iframe support with rounded-lg border
- Playlist/multiple video grid below main player
- Video titles with pixel-style dividers

### Gameplay Tutorial Section
- Step-by-step numbered guides (1, 2, 3...)
- Each step: large number badge + title + description + supporting image
- Progressive disclosure: expand/collapse for detailed sub-steps
- Visual indicators (pixel arrows, checkmarks) showing progression

### Game Rules & Tips
- Two-column layout on desktop (grid-cols-1 lg:grid-cols-2)
- Accordion-style expandable sections for different rule categories
- Highlighted tip boxes with exclamation icons
- Quick reference cards for controls/keybindings

### Footer
- Multi-column layout: About Game | Quick Links | Contact
- Social/sharing buttons with pixel icons
- Copyright and student project attribution

## Images Strategy
**Required Images:**
- **Hero Image**: Large game screenshot showcasing block world (1920x800px minimum)
- **Feature Cards**: 3-6 icon/illustrations representing game mechanics (256x256px)
- **Tutorial Screenshots**: 4-8 step-by-step gameplay images (800x600px)
- **Video Thumbnails**: Preview images for video playlist
- Use placeholder images with descriptive alt text during development

## Component Styling Details
- **Buttons**: Chunky, pixelated borders (border-4), slight 3D effect with shadow
- **Cards**: White/light background with thick borders, hover lift effect
- **Dividers**: Pixelated horizontal rules using repeating block pattern
- **Icons**: 8-bit style, monochromatic or limited color palette
- **Badges**: Pill-shaped labels for game tags/categories

## Interaction Patterns
- Minimal animations: simple hover scale (scale-105) on interactive elements
- Scroll-triggered section reveals (fade-in)
- Video modal overlay for expanded viewing
- Smooth scroll anchors for navigation links

## Content Structure
1. Hero with game title and main visual
2. Game Overview (What is this game?)
3. Key Features (3-column grid)
4. Main Tutorial Video
5. Step-by-Step Gameplay Guide (numbered sections)
6. Game Rules & Tips (expandable sections)
7. Additional Videos/Resources
8. Footer with links

## Accessibility
- High contrast text on all backgrounds
- Alt text for all game screenshots and icons
- Keyboard navigation for all interactive elements
- Clear focus states with visible outlines

This design creates an engaging, educational experience that mirrors the playful block world aesthetic while maintaining clarity and usability for learning.