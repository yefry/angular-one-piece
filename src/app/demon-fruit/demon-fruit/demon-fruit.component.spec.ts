import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonFruitComponent } from './demon-fruit.component';

describe('DemonFruitComponent', () => {
  let component: DemonFruitComponent;
  let fixture: ComponentFixture<DemonFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemonFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
