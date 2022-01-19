import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisUserComponent } from './favoris-user.component';

describe('FavorisUserComponent', () => {
  let component: FavorisUserComponent;
  let fixture: ComponentFixture<FavorisUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorisUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorisUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
