import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaCardComponent } from './materia-card.component';

describe('MateriaCardComponent', () => {
  let component: MateriaCardComponent;
  let fixture: ComponentFixture<MateriaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MateriaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
