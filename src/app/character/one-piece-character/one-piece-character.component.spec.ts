import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { OnePieceCharacterComponent } from './one-piece-character.component';
import { OnePieceService } from 'src/app/one-piece.service';

describe('OnePieceCharacterComponent', () => {
  let component: OnePieceCharacterComponent;
  let fixture: ComponentFixture<OnePieceCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnePieceCharacterComponent],
      providers: [OnePieceService],
      imports: [HttpClientModule]
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

  it(`should have as title 'angular-one-piece'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('One Piece');
  });
});
