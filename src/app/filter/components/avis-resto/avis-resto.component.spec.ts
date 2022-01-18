import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisRestoComponent } from './avis-resto.component';

describe('AvisRestoComponent', () => {
  let component: AvisRestoComponent;
  let fixture: ComponentFixture<AvisRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
