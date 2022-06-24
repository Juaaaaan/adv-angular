import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    IncrementComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  ],
  exports: [
    IncrementComponent,
    DonaComponent
  ]
})
export class ComponentsModule { }
