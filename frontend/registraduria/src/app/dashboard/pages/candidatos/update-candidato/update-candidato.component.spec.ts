import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCandidatoComponent } from './update-candidato.component';

describe('UpdateCandidatoComponent', () => {
  let component: UpdateCandidatoComponent;
  let fixture: ComponentFixture<UpdateCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCandidatoComponent]
    });
    fixture = TestBed.createComponent(UpdateCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
