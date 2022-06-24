import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss']
})
export class IncrementComponent implements OnInit {
  
  @Input('valor') progress: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valueOutput: EventEmitter<number> = new EventEmitter();


  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  cambiarValor(valor: number) {
    if (this.progress >= 100 && valor >= 0) {
      this.valueOutput.emit(100);
    }
    if (this.progress <= 0 && valor < 0) {
      this.valueOutput.emit(0);
    }
    this.valueOutput.emit(this.progress + valor);
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
     this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.valueOutput.emit(this.progress);
  }

}
