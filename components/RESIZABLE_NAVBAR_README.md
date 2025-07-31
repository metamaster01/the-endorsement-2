# Resizable Navbar Component

This is a modern, animated navigation bar that resizes and changes appearance based on scroll position. It includes both desktop and mobile responsive designs with your custom branding.

## Features

- ✨ **Scroll-based animations** - Navbar resizes and adds backdrop blur when scrolling
- 📱 **Mobile responsive** - Collapsible mobile menu with hamburger toggle
- 🎨 **Custom branding** - Integrated with THE ENDORSEMENT CO. logo and colors
- 🌙 **Dark mode support** - Works with light and dark themes
- ⚡ **Performance optimized** - Uses Framer Motion for smooth animations

## Components Overview

### Main Components

- `Navbar` - Main container with scroll detection
- `NavBody` - Desktop navigation layout
- `MobileNav` - Mobile navigation layout
- `NavItems` - Navigation menu items with hover effects
- `NavbarLogo` - Custom logo component
- `NavbarButton` - Styled buttons with multiple variants

### Supporting Components

- `MobileNavHeader` - Mobile navigation header
- `MobileNavMenu` - Mobile dropdown menu
- `MobileNavToggle` - Hamburger menu toggle

## Usage

### Basic Implementation

```tsx
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "./ResizableNavbar";

const MyNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Team", link: "#team" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton variant="merkurie">Book Consultation</NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {/* Mobile menu items */}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
```

### Button Variants

The `NavbarButton` component supports multiple variants:

- `primary` - White background with shadow
- `secondary` - Transparent background
- `dark` - Black background with white text
- `gradient` - Blue gradient
- `merkurie` - Your custom brand colors (recommended)

### Custom Logo

The `NavbarLogo` component includes:

- Animated color changes based on scroll state
- "E" logo placeholder (replace with your actual logo image)
- Company name and tagline
- Responsive sizing

To add your custom logo image, replace this section in the `NavbarLogo` component:

```tsx
{
  /* Replace this with your actual logo */
}
<div className="w-8 h-8 bg-merkurie-accent rounded-full flex items-center justify-center">
  <span className="text-merkurie-background font-bold text-lg">E</span>
</div>;

{
  /* With this: */
}
<img
  src="/path-to-your-logo.png"
  alt="THE ENDORSEMENT CO."
  className="w-8 h-8"
/>;
```

## Animation Behavior

- **Initial state**: Full width, transparent background
- **After scrolling 100px**:
  - Desktop: Resizes to 90% width, adds backdrop blur and shadow
  - Mobile: Resizes to 90% width with padding adjustments
  - Logo text color changes from white to black

## Replacing Your Current Navigation

To replace your existing `Navigation.tsx` component:

1. Import the new resizable navbar in your main layout
2. Replace the current `<Navigation />` component
3. The navbar is positioned as `fixed` so make sure to add appropriate padding to your content

```tsx
// In your layout.tsx or main component
import ResizableNavigationExample from "@/components/ResizableNavigationExample";

export default function Layout() {
  return (
    <div>
      <ResizableNavigationExample />
      {/* Add padding-top to content to account for fixed navbar */}
      <main className="pt-20">{/* Your content */}</main>
    </div>
  );
}
```

## Customization

### Colors

All colors use your existing Tailwind configuration:

- `merkurie-accent` - #f5a623 (golden yellow)
- `merkurie-background` - #1a1a1a (dark background)

### Fonts

Uses your configured Poppins font for the logo text.

### Animations

Powered by Framer Motion with spring animations:

- Stiffness: 200
- Damping: 50
- Smooth transitions on all interactive elements

## Dependencies

Required packages (already installed in your project):

- `motion` (v12.23.0) - For animations
- `@tabler/icons-react` (v3.34.0) - For menu icons
- `class-variance-authority` - For styling variants
- `clsx` & `tailwind-merge` - For className utilities
