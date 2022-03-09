import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeniedComponent } from './page-denied.component';

describe('PageDeniedComponent', () => {
  let component: PageDeniedComponent;
  let fixture: ComponentFixture<PageDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeniedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
