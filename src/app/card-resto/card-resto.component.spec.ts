import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRestoComponent } from './card-resto.component';

describe('CardRestoComponent', () => {
  let component: CardRestoComponent;
  let fixture: ComponentFixture<CardRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
