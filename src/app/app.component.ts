import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPracticeSession';

  //Interpolation is used here
  Title="This is my Practice Session on Angular 17";

  //Property Binding
  currentValue:Boolean=false;
  name="Ambar Mishra";
  onclick(){
    this.currentValue = !this.currentValue; 
  }
}
