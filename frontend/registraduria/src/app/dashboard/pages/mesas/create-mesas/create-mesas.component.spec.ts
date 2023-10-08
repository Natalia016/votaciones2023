import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMesasComponent } from './create-mesas.component';

describe('CreateMesasComponent', () => {
  let component: CreateMesasComponent;
  let fixture: ComponentFixture<CreateMesasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMesasComponent]
    });
    fixture = TestBed.createComponent(CreateMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
