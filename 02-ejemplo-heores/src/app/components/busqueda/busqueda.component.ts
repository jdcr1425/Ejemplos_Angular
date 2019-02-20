import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  nombre;
  heroes;
  constructor(private _heroeService: HeroesService, private _activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activateRoute.params.subscribe( param => {
      this.nombre = param.nombre;
      this.heroes = this._heroeService.buscarHeroe(param.nombre);
    });
  }

}
