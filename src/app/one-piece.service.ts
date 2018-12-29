import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  onePieceCharacterUrl = 'api/characters';  // URL to web api

  constructor(private http: HttpClient
    /* private angularDatabase: AngularFirestore */) {
    /* angularDatabase.collection('').valueChanges(); */ // TODO IMPLEMENT
  }

  getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(this.onePieceCharacterUrl);
  }
}
