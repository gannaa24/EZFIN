import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-bills',
  imports: [],
  templateUrl: './upcoming-bills.component.html',
  styleUrl: './upcoming-bills.component.css'
})
export class UpcomingBillsComponent {
  add:boolean = false;
  expenseDate:boolean = false;


  addTransaction() {
    this.add = true;
    console.log('addTransaction', this.add);
    
  }
  cancelTransaction() {
    this.add = false;
  }
}
