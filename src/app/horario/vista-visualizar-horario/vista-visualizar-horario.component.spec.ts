import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVisualizarHorarioComponent } from './vista-visualizar-horario.component';

describe('VistaVisualizarHorarioComponent', () => {
  let component: VistaVisualizarHorarioComponent;
  let fixture: ComponentFixture<VistaVisualizarHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaVisualizarHorarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaVisualizarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
