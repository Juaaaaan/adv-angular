import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService ) { }

  ngOnInit() {
    // customInitFunctions();
    // No me está funcionando el llamado a la función para que refresque el menú
  }

}
