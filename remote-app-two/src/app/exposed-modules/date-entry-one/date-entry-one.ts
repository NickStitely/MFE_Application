import { Component } from '@angular/core';

@Component({
    standalone: false,
  selector: 'app-date-entry-one',
  templateUrl: './date-entry-one.html',
  styleUrl: './date-entry-one.scss'
})
export class DateEntryOne {
  selectedDate: string = '';
  
  constructor() {
    // Initialize with current date
    const today = new Date();
    this.selectedDate = today.toISOString().substring(0, 10);
  }
  
  onDateChange(event: Event): void {
    this.selectedDate = (event.target as HTMLInputElement).value;
  }
}
