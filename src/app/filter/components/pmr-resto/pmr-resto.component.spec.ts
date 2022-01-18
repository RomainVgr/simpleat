import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmrRestoComponent } from './pmr-resto.component';

describe('PmrRestoComponent', () => {
  let component: PmrRestoComponent;
  let fixture: ComponentFixture<PmrRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmrRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmrRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
