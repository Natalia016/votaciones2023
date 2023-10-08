import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePermisosComponent } from './update-permisos.component';

describe('UpdatePermisosComponent', () => {
  let component: UpdatePermisosComponent;
  let fixture: ComponentFixture<UpdatePermisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePermisosComponent]
    });
    fixture = TestBed.createComponent(UpdatePermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
