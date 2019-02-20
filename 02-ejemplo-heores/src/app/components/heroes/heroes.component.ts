import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Heroe [];

  constructor(private _heroeService: HeroesService,
              private _router: Router
              ) {


  }

  ngOnInit() {
    this.heroes = this._heroeService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(index) {
    this._router.navigate(['/heroe', index]);
  }

}
