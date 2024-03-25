import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularPracticeSession';

  //Interpolation is used here
  Title = 'This is my Practice Session on Angular 17';

  //Property Binding
  currentValue: Boolean = true;
  name = 'Ambar Mishra';
  onclick() {
    this.currentValue = !this.currentValue;
  }

  // Two way data binding
  _message='Two way data binding';
}
