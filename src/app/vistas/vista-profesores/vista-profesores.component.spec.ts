import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProfesoresComponent } from './vista-profesores.component';

describe('VistaProfesoresComponent', () => {
  let component: VistaProfesoresComponent;
  let fixture: ComponentFixture<VistaProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaProfesoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
