import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
add:boolean = false;
expenseDate:boolean = false;
  
  addTransaction() {
    this.add = true;
    console.log('addTransaction', this.add);
    
  }


  cancelTransaction() {
    this.add = false;
  }

  addExpenses() {
    this.expenseDate = !this.expenseDate;
    console.log('addExpenses', this.expenseDate);
  }
  cancelExpenses() {
    this.expenseDate = false;
  }
}
