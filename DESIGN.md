# Design System: Relats.com Clone

This document contains the design tokens and system specifications extracted millimetrically from Relats.com.

## 1. Colors
| Name | HEX | Usage |
| :--- | :--- | :--- |
| **Primary** | `#FF5E00` | CTAs, Highlights, Brand Icons |
| **Dark BG** | `#111111` | Hero, Dark Sections, Navbar |
| **Light BG** | `#DEDAD6` | Secondary sections, Card backgrounds |
| **Text Dark** | `#111111` | Headlines on light backgrounds |
| **Text Secondary** | `#666666` | Body text, captions |

## 2. Typography
- **Primary Font:** Hanken Grotesk (sans-serif)
- **Headlines:** Tracking tight (-0.02em to -0.05em), Extra Bold / Black weights.
- **Body:** 18px (1.125rem), regular weight, 1.6 line-height.

## 3. Spacing & Grid
- **Section Padding:** `120px` (top/bottom)
- **Max Width:** `1440px` (8xl)
- **Desktop Padding:** `40px` (horizontal)
- **Mobile Padding:** `20px` (horizontal)

## 4. Components
- **Buttons:** Pill-shaped (100px radius), large padding (px-8 py-4).
- **Cards:** 16px to 24px border radius, subtle borders (`border-black/5`).

## 5. Motion Principles
- **Scroll Reveals:** 0.8s duration, `[0.16, 1, 0.3, 1]` cubic-bezier for premium feel.
- **Parallax:** Subtle (0.2x scroll speed) for background elements.
- **Sticky Nav:** Height and opacity transition on scroll (50px threshold).
