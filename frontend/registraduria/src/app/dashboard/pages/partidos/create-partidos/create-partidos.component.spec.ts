import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartidosComponent } from './create-partidos.component';

describe('CreatePartidosComponent', () => {
  let component: CreatePartidosComponent;
  let fixture: ComponentFixture<CreatePartidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePartidosComponent]
    });
    fixture = TestBed.createComponent(CreatePartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
