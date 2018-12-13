import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevilFruitParameciaComponent } from './devil-fruit-paramecia.component';

describe('DevilFruitParameciaComponent', () => {
  let component: DevilFruitParameciaComponent;
  let fixture: ComponentFixture<DevilFruitParameciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevilFruitParameciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevilFruitParameciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
