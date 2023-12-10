import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'price-comparision';

  handleFormChange(formValue: any) {
    // Handle the form value changes here
    console.log('Form Value:', formValue);
  }
}
