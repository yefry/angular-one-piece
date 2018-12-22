// Created to explain error with repeated selector!
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one-piece-character-repeated',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {

  public title = 'Created to explain error with repeated selector!';

  constructor() { }

  ngOnInit() {
  }

}
