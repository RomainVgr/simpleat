import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestauComponent } from './add-restau.component';

describe('AddRestauComponent', () => {
  let component: AddRestauComponent;
  let fixture: ComponentFixture<AddRestauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
