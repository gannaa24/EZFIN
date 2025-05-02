import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upcoming-bills',
  imports: [FormsModule],
  templateUrl: './upcoming-bills.component.html',
  styleUrl: './upcoming-bills.component.css'
})
export class UpcomingBillsComponent {
  add:boolean = false;
  expenseDate:boolean = false;

  amount: number | null = null;
  description: string = '';
  selectedOption: string = 'expense';
  dueDate: string = '';
  

  newTransaction(){
    this.add = true;
  }
  addTransaction() {
    
    console.log('addTransaction', this.add);
    const newTransaction = {
      amount: this.amount,
      description: this.description,
      selectedOption: 'expense', // since this is an expense
      dueDate: this.dueDate
    };

    // Get existing data from localStorage (if any)
    let currentData = JSON.parse(localStorage.getItem('expensesTransactions') || '[]');

    // Add the new transaction to the array
    currentData.push(newTransaction);

    // Save the updated array back to localStorage
    localStorage.setItem('expensesTransactions', JSON.stringify(currentData));

    // Clear form after adding the transaction
    this.amount = 0;
    this.description = '';
    this.dueDate = '';
    this.cancelTransaction();
    window.location.reload();
    
  }
  cancelTransaction() {
    this.add = false;
  }

  expensesTransactions = JSON.parse(localStorage.getItem('expensesTransactions') || '[]');
}
