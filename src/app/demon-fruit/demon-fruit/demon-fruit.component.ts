import { Component, OnInit } from '@angular/core';
import { DemonFruit } from 'src/app/demon-fruit';
import { DEMON_FRUIT } from 'src/app/mock-demon-fruit';

@Component({
  selector: 'one-piece-demon-fruit',
  templateUrl: './demon-fruit.component.html',
  styleUrls: ['./demon-fruit.component.scss']
})
export class DemonFruitComponent implements OnInit {

  demonFruits: DemonFruit[] = DEMON_FRUIT;
  title: string = 'Demon Fruits';

  constructor() { }

  ngOnInit() {
  }

}
