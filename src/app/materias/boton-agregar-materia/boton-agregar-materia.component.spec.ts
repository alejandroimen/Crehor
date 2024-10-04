import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAgregarMateriaComponent } from './boton-agregar-materia.component';

describe('BotonAgregarMateriaComponent', () => {
  let component: BotonAgregarMateriaComponent;
  let fixture: ComponentFixture<BotonAgregarMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonAgregarMateriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAgregarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
