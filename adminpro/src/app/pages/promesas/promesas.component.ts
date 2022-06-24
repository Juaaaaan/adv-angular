import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then((users) => {
      console.log(users);
    })
    // const firstPromise = new Promise( (resolve, reject) => {
    //   if (false) {
    //     resolve('holi');
    //   } else {
    //     reject('algo salió mal');
    //   }
    // });

    // firstPromise.then((mensaje) => {
    //   console.log(mensaje);
    // }).catch((err) => {
    //   console.log('Error promesa', err);
    // })

    // console.log('fin init');
  }

  getUsers() {
    return new Promise ( (resolve, reject) =>  {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data))
    });
    }
}
