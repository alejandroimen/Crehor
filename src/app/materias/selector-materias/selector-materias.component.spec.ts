import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorMateriasComponent } from './selector-materias.component';

describe('SelectorMateriasComponent', () => {
  let component: SelectorMateriasComponent;
  let fixture: ComponentFixture<SelectorMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectorMateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
