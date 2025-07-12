import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  @Output() result = new EventEmitter<number>();

  number1: number = 0;
  number2: number = 0;
  lastResult: number | null = null;
  lastOperation: string = '';

  add(): void {
    const result = this.number1 + this.number2;
    this.emitResult(result, 'add');
  }

  subtract(): void {
    const result = this.number1 - this.number2;
    this.emitResult(result, 'subtract');
  }

  multiply(): void {
    const result = this.number1 * this.number2;
    this.emitResult(result, 'multiply');
  }

  divide(): void {
    if (this.number2 === 0) {
      alert('Cannot divide by zero!');
      return;
    }
    const result = this.number1 / this.number2;
    this.emitResult(result, 'divide');
  }

  private emitResult(result: number, operation: string): void {
    this.lastResult = result;
    this.lastOperation = operation;
    this.result.emit(result);
  }

  onNumber1Change(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.number1 = parseFloat(target.value) || 0;
  }

  onNumber2Change(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.number2 = parseFloat(target.value) || 0;
  }

  getOperationSymbol(): string {
    switch (this.lastOperation) {
      case 'add': return '+';
      case 'subtract': return '-';
      case 'multiply': return '×';
      case 'divide': return '÷';
      default: return '';
    }
  }
}
