import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidatoComponent } from './list-candidato.component';

describe('ListCandidatoComponent', () => {
  let component: ListCandidatoComponent;
  let fixture: ComponentFixture<ListCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCandidatoComponent]
    });
    fixture = TestBed.createComponent(ListCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
