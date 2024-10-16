import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVisualizarProfesoresComponent } from './vista-visualizar-profesores.component';

describe('VistaVisualizarProfesoresComponent', () => {
  let component: VistaVisualizarProfesoresComponent;
  let fixture: ComponentFixture<VistaVisualizarProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaVisualizarProfesoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaVisualizarProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
