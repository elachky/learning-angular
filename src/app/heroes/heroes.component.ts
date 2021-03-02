import { Component, OnInit } from '@angular/core';
import { Hero } from '../module/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id : 1,
    name : 'Hky'
  };
  constructor() {}

  ngOnInit(): void {
  }

}
