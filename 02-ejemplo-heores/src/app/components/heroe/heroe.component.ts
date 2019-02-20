import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  id: number;
  heroe: any = {};
  constructor(private _activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService
              ) {

    this._activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.heroe = this._heroeService.getHeroe(this.id);
    });
  }

  ngOnInit() {
  }

}
