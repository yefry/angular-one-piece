import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePieceCharacterComponent } from './one-piece-character.component';

describe('OnePieceCharacterComponent', () => {
  let component: OnePieceCharacterComponent;
  let fixture: ComponentFixture<OnePieceCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePieceCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePieceCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
