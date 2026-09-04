---
name: Darjeeling Himalayan Heritage System
colors:
  surface: '#f5fbf8'
  surface-dim: '#d6dbd9'
  surface-bright: '#f5fbf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff5f2'
  surface-container: '#eaefec'
  surface-container-high: '#e4e9e7'
  surface-container-highest: '#dee4e1'
  on-surface: '#171d1b'
  on-surface-variant: '#3c4946'
  inverse-surface: '#2c3230'
  inverse-on-surface: '#ecf2ef'
  outline: '#6c7a76'
  outline-variant: '#bbcac5'
  surface-tint: '#006b5c'
  primary: '#006b5c'
  on-primary: '#ffffff'
  primary-container: '#02ac96'
  on-primary-container: '#003830'
  inverse-primary: '#56dbc3'
  secondary: '#3b665d'
  on-secondary: '#ffffff'
  secondary-container: '#bae9dd'
  on-secondary-container: '#3f6b61'
  tertiary: '#9c432c'
  on-tertiary: '#ffffff'
  tertiary-container: '#e57b60'
  on-tertiary-container: '#5f1704'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#76f8df'
  primary-fixed-dim: '#56dbc3'
  on-primary-fixed: '#00201b'
  on-primary-fixed-variant: '#005045'
  secondary-fixed: '#bdece0'
  secondary-fixed-dim: '#a2d0c4'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#224e45'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a2'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#7d2c18'
  background: '#f5fbf8'
  on-background: '#171d1b'
  surface-variant: '#dee4e1'
typography:
  display-lg:
    fontFamily: Domine
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  touch-min: 3rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
---

## Brand & Style

This design system establishes a bold, expressive, civic-grade interface for passengers traversing the mountain corridors of the Darjeeling Himalayan Railway. It fuses the vibrant energy of contemporary transit design with the structural heritage of 19th-century railway typography and enameled cast-iron station boards.

The visual direction captures a lively yet grounded UNESCO World Heritage network through:
- **Expressive Functionalism**: High-contrast, dynamic layouts reminiscent of modern timetables, brass plaques, and mountain pass elevation posts, translated into crisp digital surfaces.
- **Mountain Utilitarianism**: Built for offline operation, dense fog, low-bandwidth mountain towers, and one-handed operation along steep terrains and moving narrow-gauge carriages.
- **Civic Calm**: Subdued natural mountain hues and reassuring warm parchment tones replace alarmist digital interfaces, providing steady guidance during landslips, monsoon delays, and locomotive rescheduling.

## Colors

The color architecture balances heritage mountain identity with strict accessibility standards (WCAG AAA for all body and transit statuses).

### Palette Roles
- **Primary (`#02AC96`)**: Expressive Teal, evoking vibrant vintage DHR steam locomotives and modernized enamel livery. Used for primary navigation, critical interactive controls, and anchor structural containers.
- **Secondary (`#537F75`)**: Muted Mountain Sage, representing rich alpine vegetation and aged station fixtures. Used for sub-headers, interactive selection borders, and secondary buttons.
- **Tertiary (`#E57B60`)**: Terracotta Accent, used for highlights, alerts, and dynamic callouts.
- **Surface & Canvas (`#E3FFFB` & `#E3FFFB`)**: Soft mountain mint and ice tints that eliminate blue-light glare and improve readability under harsh sunlight or dim carriage lanterns.
- **Cards & Elevated Containers (`#FFFFFF` & `#D3F5F1`)**: Pure White for active priority cards and Subtle Mint Tint for structural lists, archived items, or offline storage blocks.
- **Text & Contrast (`#00201E` Main, `#3C4946` Muted)**: Deep Teal-Charcoal and Forest Slate ensuring high legibility across multilingual scripts.
- **System Service Tokens**:
  - **Success / Normal Service (`#397A50`)**: Deep Fir Green for on-time departures, clear track signals, and verified local cache.
  - **Warning / Delay (`#E57B60`)**: Terracotta for weather holds, steam engine refuels, and speed restrictions.
  - **Danger / Cancellation (`#B94235`)**: Indian Railway Brick Red for washouts, track maintenance closures, and route diversions.
  - **Dividers & Structural Borders (`#BBCAC5`)**: Soft Heritage Stone, providing low-contrast geometric partitioning without visual noise.

## Typography

The type system blends authoritative railway display serif styling with a high-performance functional sans-serif engineered for multilingual script parity.

- **Display & Section Headings**: Configured in a sturdy, literary serif (`Domine`) echoing carved station wayfinding, official gazettes, and timeless rail heraldry. It lends solemnity and clarity to stop names like *Ghum (2,258 m)*, *Kurseong*, and *Batasia Loop*.
- **Body, UI & Data Display**: Handled by `Inter`. The open apertures and tall x-height guarantee immediate scanability for emergency bulletins, train numbers, platform shifts, and offline timetables. It supports Devanagari, Bengali, and Latin scripts gracefully side-by-side with balanced baseline alignment.
- **Numerics**: Timetable tabular figures (`tnum`) must be enforced across all departure boards, elevation tags, and delay clocks to prevent horizontal jitter during real-time cache updates.

## Layout & Spacing

The layout is built on a responsive 8pt base grid with an absolute commitment to transit usability under movement:

- **Touch Safety Baseline**: Every interactive surface enforces a minimum touch target of `48px` (`3rem`), accounting for cold fingers, gloved travelers, and train vibrations.
- **Form Factors**:
  - **Mobile (Single Column, max 600px)**: 16px fluid margin, 12px card gaps. Status banners stack fixed at the top, leaving primary thumb actions pinned cleanly above the bottom navigation safe area.
  - **Tablet / Split Carriage Display (601px - 1024px)**: 6-column grid with 20px gutters. Master-detail navigation split (Left: Route list / Elevation gradient; Right: Station detail & Disruption stream).
  - **Desktop / Kiosk (1025px+)**: 12-column grid capped at 1200px max content width with 24px gutters, centered on teal-tinted backing.
- **Rhythm**: Spacing between unrelated card groups must always be `2rem` (`space-xl`), while content within cards adheres to tight `0.75rem` or `1rem` internal spacing for immediate gestalt grouping.

## Elevation & Depth

Visual hierarchy uses physical material cues—station tiles, pressed enameled metal plates, and layered paper tickets—avoiding harsh electronic glows or dramatic drop shadows.

- **Surface Levels**:
  - **Ground (Level 0)**: Background `#E3FFFB`. Soft matte finish.
  - **Card Baseline (Level 1)**: Pure White `#FFFFFF` or Light Tint `#D3F5F1`, bounded by a hairline border (`1px solid #BBCAC5`). Shadow: `0 1px 3px rgba(2, 172, 150, 0.04), 0 1px 2px rgba(2, 172, 150, 0.02)`.
  - **Interactive Hover & Modal (Level 2)**: Slightly elevated white surface with a tinted shadow: `0 4px 12px rgba(2, 172, 150, 0.08), 0 2px 4px rgba(2, 172, 150, 0.04)`.
  - **Critical Disruption Sheet / Emergency Overlay (Level 3)**: Deep contrast elevation with `0 12px 28px rgba(0, 32, 30, 0.16)`.
- **Enamel Inset Technique**: Status badges and offline indicators use a slight `inset 0 1px 1px rgba(0,0,0,0.06)` treatment to mimic authentic stamped iron signs.

## Shapes

The shape vocabulary uses softened structural contours (`roundedness: 2` = 0.5rem base, with 1rem for main cards and 1.5rem for modular containers), balancing civic architecture with friendly digital handheld tactility.

- **Cards & Banners**: `rounded-2xl` (16px) for major transit status blocks and journey summaries; `rounded-xl` (12px) for nested station stops and audio modules.
- **Buttons & Interactive Badges**: `rounded-lg` (8px) for buttons maintaining a firm, reliable industrial stamp.
- **Pills & Indicator Badges**: Fully pill-shaped (`9999px`) for network mode flags, multilingual toggles, and track status indicators.
- **Dividers & Perforations**: Station-to-station route progressions use 2px dashed heritage stone lines (`#BBCAC5`) with circular 8px railway node anchors.

## Components

### Buttons
- **Primary**: Solid Expressive Teal (`#02AC96`) fill, Pure White (`#FFFFFF`) label, subtle 1.5px border. Height: 48px minimum. Active press reveals darker teal shade.
- **Secondary**: Clear White (`#FFFFFF`) surface with 1.5px Mountain Sage (`#537F75`) border and `#02AC96` text.
- **Disruption / Emergency Action**: Indian Railway Brick Red (`#B94235`) background with `#FFFFFF` text for immediate report submissions or alternate route triggers.

### Cards & Service Alert Panels
- Standard cards feature a pure white background, 1px `#BBCAC5` border, and 16px border-radius.
- **Service Status Alert Card**: Employs a 4px solid left accent bar keyed to the condition:
  - Fir Green (`#397A50`) for "Steam Express Running Normal"
  - Terracotta (`#E57B60`) for "Fog Hazard / 35m Delay at Ghoom"
  - Brick Red (`#B94235`) for "Landslip / Kurseong–Sukna Suspended"
- Inside, the station name appears in Domine 18px SemiBold, with timestamps and delay figures set in Inter tabular numbers.

### Chips & Multilingual Pills
- **Language Switcher**: Segmented pill component featuring Hindi (हिंदी), Nepali (नेपाली), Bengali (বাংলা), and English (ENG). The active choice is filled in Expressive Teal with white text; inactive options remain muted slate on transparent background with 48px touch targets.
- **Offline Cache Chip**: Enameled terracotta or sage pill pinned to the navigation bar. Displays a cloud-off icon with the label `"OFFLINE CACHE: 08:30 AM"`.

### Transit List Items & Timetable Timeline
- Continuous vertical progress rail connecting stations with 10px circular nodes.
- Current locomotive location is marked by a dual-ring animated beacon in Expressive Teal.
- Station rows feature 16px vertical padding, displaying station name, elevation (m), platform number, and scheduled vs. estimated arrival.

### Input Fields
- Enclosed inputs with 1.5px `#BBCAC5` border on `#FFFFFF` canvas. 
- Focused state: 2px ring in Mountain Sage (`#537F75`) with light tint backdrop. Helper text strictly maintained at 14px in Forest Slate (`#3C4946`).

### Audio Passenger Guide Player
- Dedicated audio companion widget for sight-impaired travelers or heritage sightseeing:
  - Surface: Subtle Mint Tint (`#D3F5F1`) card with a 1px border.
  - Controls: 52px central play/pause button in `#02AC96` with tactile high-contrast icons.
  - Features a scrub bar styled as a stylized gauge track with speed selectors (`1.0x`, `1.2x`) and language voice indicator.