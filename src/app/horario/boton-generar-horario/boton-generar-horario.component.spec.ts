import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonGenerarHorarioComponent } from './boton-generar-horario.component';

describe('BotonGenerarHorarioComponent', () => {
  let component: BotonGenerarHorarioComponent;
  let fixture: ComponentFixture<BotonGenerarHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonGenerarHorarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonGenerarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
