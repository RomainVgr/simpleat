import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccesDeniedComponent } from './page-acces-denied.component';

describe('PageAccesDeniedComponent', () => {
  let component: PageAccesDeniedComponent;
  let fixture: ComponentFixture<PageAccesDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAccesDeniedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAccesDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
