import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss']
})
export class Grafica1Component {

  public labels1: string[] = [ 'Data_1', 'Data_2', 'Data_3' ];
  public labels2: string[] = [ 'Download Sales_2', 'In-Store Sales_2', 'Mail-Order Sales_2' ];
  public labels3: string[] = [ 'Download Sales_3', 'In-Store Sales_3', 'Mail-Order Sales_3' ];
  public labels4: string[] = [ 'Download Sales_4', 'In-Store Sales_4', 'Mail-Order Sales_4' ];

  public dataCharts1: number[] = [ 150, 200, 203 ];
  public dataCharts2: number[] = [ 250, 100, 303 ];
  public dataCharts3: number[] = [ 50, 30, 240 ];
  public dataCharts4: number[] = [ 349, 400, 100 ];
}
