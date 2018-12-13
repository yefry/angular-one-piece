import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevilFruitZoanComponent } from './devil-fruit-zoan.component';

describe('DevilFruitZoanComponent', () => {
  let component: DevilFruitZoanComponent;
  let fixture: ComponentFixture<DevilFruitZoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevilFruitZoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevilFruitZoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
