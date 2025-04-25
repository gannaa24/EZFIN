import { Component } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-overview',
  imports: [BaseChartDirective],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'january', 'february', 'march', 'april', 'may', 'june', 'july' ],
    datasets: [
      { data: [ 1000, 2000, 1500, 500, 3000, 2200, 3200 ],label:'monthly balance',
        backgroundColor:'#000066',
        xAxisID:'month',
        yAxisID:'amount',
        
       }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

}
