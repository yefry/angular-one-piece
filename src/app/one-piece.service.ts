import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  constructor( private angularDatabase: AngularFirestore ) { 
      angularDatabase.collection('').valueChanges();
    }
}
