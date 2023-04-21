import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSavedComponent } from './get-saved.component';

describe('GetSavedComponent', () => {
  let component: GetSavedComponent;
  let fixture: ComponentFixture<GetSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
