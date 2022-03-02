import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDelRestauComponent } from './update-del-restau.component';

describe('UpdateDelRestauComponent', () => {
  let component: UpdateDelRestauComponent;
  let fixture: ComponentFixture<UpdateDelRestauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDelRestauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDelRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
