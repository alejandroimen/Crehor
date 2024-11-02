import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHacerHorarioComponent } from './vista-hacer-horario.component';

describe('VistaHacerHorarioComponent', () => {
  let component: VistaHacerHorarioComponent;
  let fixture: ComponentFixture<VistaHacerHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaHacerHorarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaHacerHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
