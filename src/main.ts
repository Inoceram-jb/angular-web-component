import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { HelloWorld } from './app/hello-world/hello-world';
import { Calculator } from './app/calculator/calculator';
import { appConfig } from './app/app.config';

// Create the Angular application
createApplication(appConfig).then((appRef) => {
  // Create the hello-world custom element
  const helloWorldElement = createCustomElement(HelloWorld, {
    injector: appRef.injector,
  });

  // Create the calculator custom element
  const calculatorElement = createCustomElement(Calculator, {
    injector: appRef.injector,
  });

  // Register the custom elements with the browser
  customElements.define('hello-world', helloWorldElement);
  customElements.define('simple-calculator', calculatorElement);

  console.log('Web components registered successfully!');
  console.log('- hello-world');
  console.log('- simple-calculator');
}).catch((err) => console.error(err));
