import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartidosComponent } from './list-partidos.component';

describe('ListPartidosComponent', () => {
  let component: ListPartidosComponent;
  let fixture: ComponentFixture<ListPartidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPartidosComponent]
    });
    fixture = TestBed.createComponent(ListPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
