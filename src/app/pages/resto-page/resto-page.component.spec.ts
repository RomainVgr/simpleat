import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoPageComponent } from './resto-page.component';

describe('RestoPageComponent', () => {
  let component: RestoPageComponent;
  let fixture: ComponentFixture<RestoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
