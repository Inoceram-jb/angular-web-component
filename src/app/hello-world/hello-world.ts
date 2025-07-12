import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  imports: [],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css'
})
export class HelloWorld {
  @Input() name: string = 'World';
  @Input() message: string = 'Hello';

  get fullMessage(): string {
    return `${this.message}, ${this.name}!`;
  }

  onClick(): void {
    alert(`You clicked on: ${this.fullMessage}`);
  }
}
