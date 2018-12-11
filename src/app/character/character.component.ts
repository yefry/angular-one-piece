// Created to explain error with repeated selector!
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one-piece-character-repeated',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {

  title: string = 'Created to explain error with repeated selector!';

  constructor() { }

  ngOnInit() {
  }

}
