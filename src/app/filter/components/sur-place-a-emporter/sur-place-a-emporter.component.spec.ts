import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurPlaceAEmporterComponent } from './sur-place-a-emporter.component';

describe('SurPlaceAEmporterComponent', () => {
  let component: SurPlaceAEmporterComponent;
  let fixture: ComponentFixture<SurPlaceAEmporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurPlaceAEmporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurPlaceAEmporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
