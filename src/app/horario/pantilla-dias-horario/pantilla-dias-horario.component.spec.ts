import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantillaDiasHorarioComponent } from './pantilla-dias-horario.component';

describe('PantillaDiasHorarioComponent', () => {
  let component: PantillaDiasHorarioComponent;
  let fixture: ComponentFixture<PantillaDiasHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantillaDiasHorarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantillaDiasHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
