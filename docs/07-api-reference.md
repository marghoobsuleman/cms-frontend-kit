# API Reference

Complete API reference for @hashtagcms/web-ui-kit components and utilities.

## Core Components

### Subscribe Component

Newsletter subscription form handler.

**Package:** `@hashtagcms/web-sdk`

#### Constructor

```javascript
new Subscribe()
```

**Example:**
```javascript
import { Subscribe } from '@hashtagcms/web-sdk';

const subscribe = new Subscribe();
```

#### Methods

##### `handleSubmit(event)`
Handles form submission.

**Parameters:**
- `event` (Event) - Submit event

**Returns:** `Promise<void>`

**Example:**
```javascript
subscribe.handleSubmit(event);
```

##### `validate()`
Validates form inputs.

**Returns:** `boolean`

**Example:**
```javascript
if (subscribe.validate()) {
    // Form is valid
}
```

#### HTML Structure

```html
<form id="subscribe-form">
    <input type="email" name="email" placeholder="Enter your email" required>
    <button type="submit">Subscribe</button>
</form>
```

### AppConfig

Application configuration manager.

**Package:** `@hashtagcms/web-sdk`

#### Constructor

```javascript
new AppConfig(config)
```

**Parameters:**
- `config` (Object) - Configuration object (optional)

**Example:**
```javascript
import { AppConfig } from '@hashtagcms/web-sdk';

const config = new AppConfig({
    apiUrl: 'https://api.example.com',
    debug: true
});
```

#### Methods

##### `get(key)`
Gets configuration value.

**Parameters:**
- `key` (string) - Configuration key

**Returns:** `any`

**Example:**
```javascript
const apiUrl = config.get('apiUrl');
```

##### `set(key, value)`
Sets configuration value.

**Parameters:**
- `key` (string) - Configuration key
- `value` (any) - Configuration value

**Returns:** `void`

**Example:**
```javascript
config.set('apiUrl', 'https://new-api.example.com');
```

---

### Analytics

Page view and event tracking.

**Package:** `@hashtagcms/web-sdk`

#### Initialization

```javascript
import { Analytics } from '@hashtagcms/web-sdk';
const analytics = new Analytics();
```

#### Methods

##### `trackPageView(page)`
Tracks a page view.

**Parameters:**
- `page` (string) - Page path

**Returns:** `void`

**Example:**
```javascript
analytics.trackPageView('/about');
```

##### `trackEvent(category, action, label, value)`
Tracks a custom event.

**Parameters:**
- `category` (string) - Event category
- `action` (string) - Event action
- `label` (string) - Event label (optional)
- `value` (number) - Event value (optional)

**Returns:** `void`

**Example:**
```javascript
import { trackEvent } from '@hashtagcms/web-sdk';

trackEvent('Button', 'Click', 'Subscribe', 1);
```

---

## Theme Classes

### Basic Theme

**Location:** `src/themes/basic/js/app.js`

#### Features
- Automatic component initialization
- Subscribe form integration
- Analytics tracking

#### Usage
```javascript
import '@hashtagcms/web-ui-kit/src/themes/basic/js/app';
```

---

### Elegant Theme

**Location:** `src/themes/elegant/js/app.js`

#### Constructor

```javascript
new ElegantTheme()
```

#### Methods

##### `initSmoothScroll()`
Initializes smooth scrolling for anchor links.

**Returns:** `void`

##### `initParallax()`
Initializes parallax scrolling effects.

**Returns:** `void`

**HTML:**
```html
<div class="parallax" data-speed="0.5">
    <!-- Content -->
</div>
```

##### `initCardAnimations()`
Initializes card scroll animations.

**Returns:** `void`

**HTML:**
```html
<div class="feature-card">
    <!-- Card content -->
</div>
```

#### Usage
```javascript
import '@hashtagcms/web-ui-kit/src/themes/elegant/js/app';
```

---

## SCSS Variables

### Basic Theme Variables

**Location:** `src/themes/basic/sass/_variables.scss`

```scss
// Colors
$body-bg: #ffffff;
$text-color: #333333;
$primary-color: #4CAF50;

// Typography
$font-family-sans-serif: 'Raleway', sans-serif;
$font-size-base: 16px;

// Spacing
$container-max-width: 1200px;
```

### Elegant Theme Variables

**Location:** `src/themes/elegant/sass/_variables.scss`

```scss
// Colors
$primary-dark: #0a1929;
$primary-blue: #1e3a5f;
$accent-cyan: #00d4ff;
$accent-purple: #6366f1;
$text-primary: #e8eaed;
$text-secondary: #9ca3af;

// Typography
$font-primary: 'Inter', sans-serif;
$font-mono: 'JetBrains Mono', monospace;

// Effects
$transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
$shadow-elegant: 0 20px 60px rgba(0, 0, 0, 0.3);
$glow-cyan: 0 0 20px rgba(0, 212, 255, 0.3);
```

---

## SCSS Mixins

### Responsive Breakpoints

```scss
// Usage in your theme
@media (max-width: 768px) {
  .hero {
    font-size: 2rem;
  }
}
```

### Common Patterns

#### Glass Effect (Elegant Theme)

```scss
.glass-effect {
  background: rgba($surface-light, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba($accent-cyan, 0.1);
}
```

#### Gradient Text (Elegant Theme)

```scss
.gradient-text {
  background: linear-gradient(135deg, $accent-cyan, $accent-purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## CSS Classes

### Basic Theme Classes

#### Layout
- `.container` - Main container
- `.hero` - Hero section
- `.hero-bg-1`, `.hero-bg-2` - Hero backgrounds
- `.hero-inner` - Hero inner wrapper
- `.hero-text` - Hero text

#### Components
- `.featured-card` - Feature card
- `.shadow-common` - Common shadow
- `.section-our-specaility` - Features section
- `.section-subscribe` - Subscribe section

#### Icons
- `.__icon` - Icon wrapper
- `.design-card`, `.design-mobile`, `.design-fast-loading` - Icon variants

### Elegant Theme Classes

#### Layout
- `.hero` - Hero section
- `.hero-content` - Hero content wrapper
- `.hero-title` - Hero title
- `.hero-subtitle` - Hero subtitle

#### Components
- `.feature-card`, `.tech-card` - Feature cards
- `.glass-effect` - Glass morphism effect
- `.gradient-text` - Gradient text
- `.glow` - Glow effect
- `.parallax` - Parallax element

#### Animations
- `.animate-in` - Fade in animation
- `.fadeInUp` - Fade in up animation

---

## Events

### Subscribe Component Events

```javascript
// Listen for successful subscription
document.addEventListener('subscribe:success', (event) => {
    console.log('Subscribed:', event.detail.email);
});

// Listen for subscription error
document.addEventListener('subscribe:error', (event) => {
    console.error('Error:', event.detail.error);
});
```

### Form Helper Events

```javascript
// Listen for validation
document.addEventListener('form:validate', (event) => {
    console.log('Valid:', event.detail.valid);
});

// Listen for submission
document.addEventListener('form:submit', (event) => {
    console.log('Data:', event.detail.data);
});
```

---

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## TypeScript Definitions

TypeScript definitions are not currently included but may be added in future versions.

---

## Related Documentation

- [Getting Started](./01-getting-started.md)
- [Creating Themes](./02-creating-themes.md)
- [Theme Structure](./03-theme-structure.md)
- [Contributing](../CONTRIBUTING.md)
