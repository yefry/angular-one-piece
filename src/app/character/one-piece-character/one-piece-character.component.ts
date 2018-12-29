import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';
import { OnePieceService } from 'src/app/one-piece.service';

@Component({
  selector: 'one-piece-character',
  templateUrl: './one-piece-character.component.html',
  styleUrls: ['./one-piece-character.component.scss']
})
export class OnePieceCharacterComponent implements OnInit {

  public title = 'One Piece';
  public characters: Character[] = [];

  constructor(private onePieceservice: OnePieceService) { }

  ngOnInit() {
    this.onePieceservice.getCharacter().subscribe(characters => this.characters = characters);
  }

}
