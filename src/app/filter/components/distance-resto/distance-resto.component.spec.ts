import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceRestoComponent } from './distance-resto.component';

describe('DistanceRestoComponent', () => {
  let component: DistanceRestoComponent;
  let fixture: ComponentFixture<DistanceRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
