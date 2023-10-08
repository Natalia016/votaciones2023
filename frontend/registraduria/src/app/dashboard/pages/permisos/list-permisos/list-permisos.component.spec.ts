import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPermisosComponent } from './list-permisos.component';

describe('ListPermisosComponent', () => {
  let component: ListPermisosComponent;
  let fixture: ComponentFixture<ListPermisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPermisosComponent]
    });
    fixture = TestBed.createComponent(ListPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
