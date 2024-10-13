import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioVisibleComponent } from './horario-visible.component';

describe('HorarioVisibleComponent', () => {
  let component: HorarioVisibleComponent;
  let fixture: ComponentFixture<HorarioVisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorarioVisibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
