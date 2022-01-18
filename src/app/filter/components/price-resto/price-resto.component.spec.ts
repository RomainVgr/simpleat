import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRestoComponent } from './price-resto.component';

describe('PriceRestoComponent', () => {
  let component: PriceRestoComponent;
  let fixture: ComponentFixture<PriceRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
