import {Component} from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  frase: any = {
    Mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben parker'
    };

  mostrar: boolean;

  personajes : string[] = ['JD', 'Super man', 'Iron man', 'Shark Boy']

  constructor() {
    this.mostrar = true;
  }

}
