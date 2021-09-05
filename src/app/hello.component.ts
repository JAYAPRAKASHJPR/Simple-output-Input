import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>
      Hello {{ name }}!
      {{ user }}
    </h1>
    <button (click)="sendData()">Send</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input('name') name: string;
  @Input() user: string;
  @Output() emitt = new EventEmitter();
  counter: number = 0;
  sendData() {
    this.counter = this.counter + 1;
    this.emitt.emit(this.counter);
  }
}
