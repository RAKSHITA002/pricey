import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  form: FormGroup;

  // Emit an event when the form value changes
  @Output() formChange = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    // Create the form with checkboxes
    this.form = this.fb.group({
      amazon: [false], // Checkbox for Amazon
      flipkart: [false] ,// Checkbox for Flipkart
      // Add more checkboxes as needed
      ebay: [false],
      etsy: [false],
      walmart: [false]
    });

    // Listen to form value changes
    this.form.valueChanges.subscribe(value => {
      this.formChange.emit(value);
    });
  }
}

