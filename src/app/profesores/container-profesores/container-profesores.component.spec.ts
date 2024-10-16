import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProfesoresComponent } from './container-profesores.component';

describe('ContainerProfesoresComponent', () => {
  let component: ContainerProfesoresComponent;
  let fixture: ComponentFixture<ContainerProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerProfesoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
