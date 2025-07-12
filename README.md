# Angular 20 Web Components Project

This project demonstrates how to create reusable web components using **Angular 20** and **Angular Elements**. It includes two fully functional web components that can be used in any HTML page with vanilla JavaScript.

## 🚀 Features

### Web Components Included:

1. **Hello World Component** (`<hello-world>`)
   - Customizable greeting message and name
   - Interactive click functionality
   - Styled with modern CSS

2. **Calculator Component** (`<simple-calculator>`)
   - Two number inputs
   - Four basic operations (Add, Subtract, Multiply, Divide)
   - **@Output() event emitter** for result handling
   - Error handling (division by zero)
   - Real-time result display

## 🛠️ Technologies Used

- **Angular 20** (Latest version with zoneless change detection)
- **Angular Elements** (For creating custom elements)
- **TypeScript** (Type-safe development)
- **CSS3** (Modern styling with gradients and transitions)
- **HTML5** (Semantic markup)

## 📁 Project Structure

```
angular-web-component/
├── src/
│   ├── app/
│   │   ├── hello-world/          # Hello World web component
│   │   │   ├── hello-world.ts    # Component logic
│   │   │   ├── hello-world.html  # Component template
│   │   │   └── hello-world.css   # Component styles
│   │   ├── calculator/           # Calculator web component
│   │   │   ├── calculator.ts     # Component logic with @Output()
│   │   │   ├── calculator.html   # Component template
│   │   │   └── calculator.css    # Component styles
│   │   └── app.config.ts         # App configuration
│   └── main.ts                   # Entry point that registers web components
├── dist/                         # Built files
├── test.html                     # Hello World component test page
├── test-output.html              # Calculator component test page
├── simple-test.html              # Simple test page
└── WEB_COMPONENT_README.md       # Detailed component documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Inoceram-jb/angular-web-component.git
   cd angular-web-component
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the web components:**
   ```bash
   ng build
   ```

4. **Test the components:**
   Open any of the test HTML files in your browser:
   - `test.html` - Hello World component tests
   - `test-output.html` - Calculator component with @Output() events
   - `simple-test.html` - Simple component test

## 📖 Usage Examples

### Hello World Component

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World Test</title>
</head>
<body>
    <!-- Basic usage -->
    <hello-world></hello-world>
    
    <!-- With custom attributes -->
    <hello-world name="Developer" message="Welcome"></hello-world>
    
    <!-- Load the web component script -->
    <script src="./dist/angular-web-component/browser/main-[hash].js"></script>
</body>
</html>
```

### Calculator Component with Event Handling

```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculator Test</title>
</head>
<body>
    <simple-calculator id="myCalculator"></simple-calculator>
    <div id="result"></div>
    
    <script src="./dist/angular-web-component/browser/main-[hash].js"></script>
    <script>
        // Listen for calculation results
        document.getElementById('myCalculator').addEventListener('result', function(event) {
            document.getElementById('result').innerHTML = 'Result: ' + event.detail;
        });
    </script>
</body>
</html>
```

### Dynamic Creation with JavaScript

```javascript
// Create calculator dynamically
const calculator = document.createElement('simple-calculator');

// Add event listener for results
calculator.addEventListener('result', function(event) {
    console.log('Calculation result:', event.detail);
});

// Add to page
document.body.appendChild(calculator);
```

## 🧪 Testing

The project includes comprehensive test pages:

1. **test.html** - Demonstrates Hello World component features:
   - Default usage
   - Custom attributes
   - Dynamic creation
   - Multiple instances

2. **test-output.html** - Demonstrates Calculator component features:
   - Basic calculator functionality
   - @Output() event handling
   - Multiple calculators with separate event listeners
   - Dynamic calculator creation
   - Event logging

## 🔧 Development

### Running Development Server

```bash
ng serve
```

### Building for Production

```bash
ng build --configuration production
```

### Generating New Components

```bash
ng generate component component-name
```

### Adding New Web Components

1. Create the component using Angular CLI
2. Add the component to `main.ts`
3. Register it as a custom element:

```typescript
import { createCustomElement } from '@angular/elements';
import { YourComponent } from './app/your-component/your-component';

// In main.ts
const yourElement = createCustomElement(YourComponent, {
  injector: appRef.injector,
});
customElements.define('your-component', yourElement);
```

## 🌟 Key Features Demonstrated

- **Angular Elements Integration** - Converting Angular components to custom elements
- **@Output() Event Emitters** - Emitting events from web components to vanilla JS
- **Input Properties** - Passing data to web components via attributes
- **Modern Angular Features** - Using Angular 20's zoneless change detection
- **Cross-Framework Compatibility** - Web components that work anywhere
- **TypeScript Support** - Full type safety in component development
- **Responsive Design** - Mobile-friendly component styling

## 📝 Browser Compatibility

These web components work in all modern browsers that support:
- Custom Elements v1
- ES2015+ JavaScript features
- CSS3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Angular Elements Documentation](https://angular.io/guide/elements)
- [Web Components Standards](https://www.webcomponents.org/)
- [Angular 20 Documentation](https://angular.io/)

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Happy coding! 🎉**