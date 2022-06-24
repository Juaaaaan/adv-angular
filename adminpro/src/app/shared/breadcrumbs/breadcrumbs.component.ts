import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnDestroy {
  public title: string = '';
  public tituleSubs$: Subscription;

  constructor(private router: Router) {
    this.tituleSubs$ = this.getRoutesArguments().subscribe((data) => {
      this.title = data.title;
      document.title = `AdminPro - ${this.title}`;
    });
  }


  ngOnDestroy(): void {
    this.tituleSubs$.unsubscribe();
  }


  getRoutesArguments() {
    return this.router.events.pipe(
      filter(
        (event) =>
          event instanceof ActivationEnd && event.snapshot.firstChild === null
      ),
      map((event: any) => event.snapshot.data)
    );
  }
}
