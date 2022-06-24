import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme = document.querySelector('#theme');
  // public linkOptionsColorsTheme: NodeListOf<Element> = document.querySelectorAll('.selector');
  // lo pongo arriba declarado como propiedad para no saltar al dom tantas veces ya que cada vez que hago un 
  // querySelector, salto al dom.

  constructor() { 
    const savedTheme = localStorage.getItem('theme');
    this.theme?.setAttribute('href', savedTheme ? savedTheme : '/assets/css/colors/default-dark.css');

  }

  changeColorTheme(theme: string) {
    const urlTheme = `assets/css/colors/${ theme }.css`;
    this.theme?.setAttribute('href', urlTheme);
    // add new color theme to localstorage
    localStorage.setItem('theme', urlTheme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const linkOptionsColorsTheme = document.querySelectorAll('.selector');
    linkOptionsColorsTheme.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.theme?.getAttribute('href');
      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working'); 
      }
    } );
  }

}
