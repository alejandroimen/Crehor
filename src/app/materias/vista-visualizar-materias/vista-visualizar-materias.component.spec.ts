import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVisualizarMateriasComponent } from './vista-visualizar-materias.component';

describe('VistaVisualizarMateriasComponent', () => {
  let component: VistaVisualizarMateriasComponent;
  let fixture: ComponentFixture<VistaVisualizarMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaVisualizarMateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaVisualizarMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
