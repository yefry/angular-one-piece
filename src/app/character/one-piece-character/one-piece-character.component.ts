import { Component, OnInit } from '@angular/core';
import { OnePieceCharacter } from 'src/app/one-piece-character';
import { ONE_PIECE_CHARACTER_LIST } from 'src/app/mock-one-piece-character';

@Component({
  selector: 'one-piece-character',
  templateUrl: './one-piece-character.component.html',
  styleUrls: ['./one-piece-character.component.scss']
})
export class OnePieceCharacterComponent implements OnInit {

  private title = 'One Piece';
  private characters: OnePieceCharacter[] = ONE_PIECE_CHARACTER_LIST;

  constructor() { }

  ngOnInit() {
  }

}
