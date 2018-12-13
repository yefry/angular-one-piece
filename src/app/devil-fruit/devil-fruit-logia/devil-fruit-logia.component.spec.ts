import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevilFruitLogiaComponent } from './devil-fruit-logia.component';

describe('DevilFruitLogiaComponent', () => {
  let component: DevilFruitLogiaComponent;
  let fixture: ComponentFixture<DevilFruitLogiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevilFruitLogiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevilFruitLogiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
