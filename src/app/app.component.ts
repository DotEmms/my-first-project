import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  teaPot = 'I am a little teapot.';
  description = "Short and stout.";
  nonsense = "I'm a line of nonsense";
  tryingDouble = 12.5;
  num1 = 5;
  num2 = 7;
  num3 = this.num1 + this.num2;
  bool = false;
}
