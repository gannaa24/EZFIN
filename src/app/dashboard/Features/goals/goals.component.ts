import { Component} from '@angular/core';
import {ChartConfiguration, layouts} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-goals',
  imports: [BaseChartDirective],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {
  dates: string[] = this.generateDates();
  selectedDate: string = '';
  add:boolean = false;
  expenseDate:boolean = false;
  adjust:boolean = false;

  // Select a date
  selectDate(date: string): void {
    this.selectedDate = date;
  }

  // Generate a range of dates (for simplicity)
  generateDates(): string[] {
    const datesArray: string[] = [];
    const now = new Date();

    for (let i = 0; i < 30; i++) {
      const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000)); // Back 30 days
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Month starts from 0
      const year = date.getFullYear();
      datesArray.push(`${day}.${month}.${year}`);
      console.log(datesArray)
    }

    return datesArray;
  }


  title = 'ng2-charts-demo';

  // Doughnut
  public doughnutChartLabels: string[] = ['In progress','Target Achieved'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450],
        backgroundColor:['#999','#000066'],
       },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true
  };

  



  addTransaction() {
    this.add = true;
    console.log('addTransaction', this.add);
    
  }
  cancelTransaction() {
    this.add = false;
  }
  
  adjustGoal() {
    this.adjust = true;
    console.log('adjustGoal', this.adjust);
    
  }
  cancelAdjust() {
    this.adjust = false;
    console.log('adjustGoal', this.adjust);
  }

}


 
