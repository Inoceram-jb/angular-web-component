# Angular 20 Hello World Web Component

This project demonstrates how to create a reusable web component using Angular 20 and Angular Elements.

## Project Structure

```
angular-web-component/
├── src/
│   ├── app/
│   │   ├── hello-world/          # The web component
│   │   │   ├── hello-world.ts    # Component logic
│   │   │   ├── hello-world.html  # Component template
│   │   │   └── hello-world.css   # Component styles
│   │   └── app.config.ts         # App configuration
│   └── main.ts                   # Entry point that registers the web component
├── dist/                         # Built files
├── test.html                     # Test page for the web component
└── package.json
```

## Features

The `hello-world` web component includes:

- **Input Properties:**
  - `name`: The name to display (default: "World")
  - `message`: The greeting message (default: "Hello")

- **Interactive Features:**
  - Click handler that shows an alert
  - Styled with CSS for a professional appearance
  - Responsive design

## Building the Web Component

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   ng build
   ```

3. **The built files will be in:** `dist/angular-web-component/browser/`

## Using the Web Component

### In HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Test Page</title>
</head>
<body>
    <!-- Basic usage -->
    <hello-world></hello-world>
    
    <!-- With custom attributes -->
    <hello-world name="Developer" message="Welcome"></hello-world>
    
    <!-- Load the web component script -->
    <script src="./dist/angular-web-component/browser/main-Z4XLB5W2.js"></script>
</body>
</html>
```

### With JavaScript

```javascript
// Create element dynamically
const element = document.createElement('hello-world');
element.setAttribute('name', 'JavaScript User');
element.setAttribute('message', 'Greetings');
document.body.appendChild(element);

// Update attributes
element.setAttribute('name', 'Updated Name');
```

## Testing

Open `test.html` in your browser to see various examples of the web component in action:

1. **Basic Usage** - Default component
2. **Custom Name** - Component with custom name
3. **Custom Message and Name** - Both attributes customized
4. **Dynamic Creation** - Created and updated with JavaScript
5. **Multiple Components** - Several instances on the same page

## Key Technologies

- **Angular 20** - Latest version with zoneless change detection
- **Angular Elements** - For creating custom elements
- **TypeScript** - Type-safe development
- **CSS3** - Modern styling with gradients and transitions

## Browser Compatibility

This web component works in all modern browsers that support:
- Custom Elements v1
- ES2015+ JavaScript features
- CSS3

## Development

To run the development server:

```bash
ng serve
```

To generate a new component:

```bash
ng generate component component-name
```

## Notes

- The component uses Angular's zoneless change detection for better performance
- The web component is self-contained and can be used in any HTML page
- All Angular features like data binding, event handling, and lifecycle hooks work as expected
- The component is encapsulated and won't interfere with other page styles