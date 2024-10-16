import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAgregarProfesorComponent } from './boton-agregar-profesor.component';

describe('BotonAgregarProfesorComponent', () => {
  let component: BotonAgregarProfesorComponent;
  let fixture: ComponentFixture<BotonAgregarProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonAgregarProfesorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAgregarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
