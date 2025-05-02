import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balance',
  imports: [CommonModule, FormsModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {

  Revenue: number = 0;

add:boolean = false;
expenseDate:boolean = false;

saveData() {
  localStorage.setItem('myData', this.Revenue.toString());
  console.log('Data saved:', this.Revenue.toString());
}
  
  addTransaction() {
    this.add = true;
    console.log('addTransaction', this.add);
    
  }
  cancelTransaction() {
    this.add = false;
  }
}
