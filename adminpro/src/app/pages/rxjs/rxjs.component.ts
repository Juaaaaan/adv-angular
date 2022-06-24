import { Component, OnDestroy } from '@angular/core';
import { interval, observable, Observable, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    // this.returnObservable().pipe(
    //   retry(1)
    //   // lo va a reintentar una, otra y otra vez
    // )
    // .subscribe(
    //   (valor) => console.log('subs', valor),
    //   (error) => {
    //     return console.log('err', error);
    //   },
    //   () => console.log('obs terminado')
    // );

   this.intervalSubs = this.returnInterval().subscribe((value) => console.log(value))

   }


  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

   returnInterval():Observable<number> {
    return interval(500)
      .pipe(
        map(valor => valor+1),
        filter(valor => (valor % 2 === 0 ? true : false )),
        take(10)
      );
   }

   returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>(observer  =>  {
      // Obsever -> quien va a estar emitiiendo los valores, cuando se termina...
      // Si el observable detecta que no hay nadie suscrito, no se ejecuta, "como si alguien hablase con una pared"
      const interval = setInterval( () => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
        if (i == 2) {
          observer.error('error, llegó a dos');
        }
      }, 1000);
    });
   }

}
