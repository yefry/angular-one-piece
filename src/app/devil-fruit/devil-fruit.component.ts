import { Component, OnInit } from '@angular/core';
import { DEVIL_FRUIT } from 'src/app/mock-devil-fruit';
import { DevilFruit } from 'src/app/devil-fruit';

@Component({
  selector: 'one-piece-devil-fruit',
  templateUrl: './devil-fruit.component.html',
  styleUrls: ['./devil-fruit.component.scss']
})
export class DevilFruitComponent implements OnInit {

  devilFruits: DevilFruit[] = DEVIL_FRUIT;
  title: string = 'One Piece Devil Fruits';

  constructor() { }

  ngOnInit() {
  }

}
