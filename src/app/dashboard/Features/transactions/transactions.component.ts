import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  imports: [FormsModule ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
add:boolean = false;

  
  
amount: number | null = null;
  description: string = '';
  selectedOption: string = '';
  dueDate: string = '';
  expenseDate: boolean = false;

  storageKeys = ['capitalTransactions', 'revenueTransactions', 'savingsTransactions', 'expensesTransactions'];
  transactions: { [key: string]: any[] } = {};

  ngOnInit() {
    this.loadAllTransactions();
  
  
  }

  addExpenses() {
    this.expenseDate = true;
  }

  cancelExpenses() {
    this.expenseDate = false;
  }

  cancelTransaction() {
    this.amount = null;
    this.description = '';
    this.selectedOption = '';
    this.dueDate = '';
    this.expenseDate = false;
    this.add = false;
  }

  addTransaction() {
    this.add = true
    // if (!this.amount || !this.description || !this.selectedOption) {
    //   alert('Please fill all fields!');
    //   return;
    // }

    const transactionData = {
      amount: this.amount,
      description: this.description,
      type: this.selectedOption,
      dueDate: this.expenseDate ? this.dueDate : null
    };

    let storageKey = '';

    switch (this.selectedOption) {
      case 'capital':
        storageKey = 'capitalTransactions';
        break;
      case 'revenue':
        storageKey = 'revenueTransactions';
        break;
      case 'savings':
        storageKey = 'savingsTransactions';
        break;
      case 'expenses':
        storageKey = 'expensesTransactions';
        break;
      default:
        console.error('Invalid transaction type');
        return;
    }

    const oldData = JSON.parse(localStorage.getItem(storageKey) || '[]');
    oldData.push(transactionData);
    localStorage.setItem(storageKey, JSON.stringify(oldData));

    // alert('Transaction added successfully!');
    this.loadAllTransactions();
    this.cancelTransaction();
    window.location.reload();
  }

  loadAllTransactions() {
    this.transactions = {};
    for (let key of this.storageKeys) {
      this.transactions[key] = JSON.parse(localStorage.getItem(key) || '[]');
    }
  }


  

  revenueTransactions = JSON.parse(localStorage.getItem('revenueTransactions') || '[]');
  capitalTransactions = JSON.parse(localStorage.getItem('capitalTransactions') || '[]');
  savingsTransactions = JSON.parse(localStorage.getItem('savingsTransactions') || '[]');  
  expensesTransactions = JSON.parse(localStorage.getItem('expensesTransactions') || '[]');  


// addTransaction() {
//     this.add = true;
//     console.log('addTransaction', this.add);
    
//   }


  // cancelTransaction() {
  //   this.add = false;
  // }

//   addExpenses() {
//     this.expenseDate = !this.expenseDate;
//     console.log('addExpenses', this.expenseDate);
//   }
//   cancelExpenses() {
//     this.expenseDate = false;
//   }
}
