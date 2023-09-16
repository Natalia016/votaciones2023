import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGestionComponent } from './home-gestion.component';

describe('HomeGestionComponent', () => {
  let component: HomeGestionComponent;
  let fixture: ComponentFixture<HomeGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGestionComponent]
    });
    fixture = TestBed.createComponent(HomeGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
