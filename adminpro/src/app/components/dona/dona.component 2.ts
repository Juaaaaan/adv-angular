import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent {

  @Input() title: string = 'Sin título';
  @Input() doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() dataChart: number[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [
      { data: this.dataChart },
    ],
    labels: this.doughnutChartLabels,
  };


}
