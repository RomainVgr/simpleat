import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisBarComponent } from './avis-bar.component';

describe('AvisBarComponent', () => {
  let component: AvisBarComponent;
  let fixture: ComponentFixture<AvisBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
