import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartidosComponent } from './update-partidos.component';

describe('UpdatePartidosComponent', () => {
  let component: UpdatePartidosComponent;
  let fixture: ComponentFixture<UpdatePartidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePartidosComponent]
    });
    fixture = TestBed.createComponent(UpdatePartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
