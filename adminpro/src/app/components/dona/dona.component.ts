import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin título';
  @Input() doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() dataChart: number[] = [ 350, 200, 203 ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { data: [] },
    ],
  };

  ngOnInit() {
   this.doughnutChartData.datasets[0].data = this.dataChart;
   this.doughnutChartData.labels = this.doughnutChartLabels;
  }

}
