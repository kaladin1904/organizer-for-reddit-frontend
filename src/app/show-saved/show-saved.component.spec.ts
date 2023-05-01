import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSavedComponent } from './show-saved.component';

describe('ShowSavedComponent', () => {
  let component: ShowSavedComponent;
  let fixture: ComponentFixture<ShowSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
