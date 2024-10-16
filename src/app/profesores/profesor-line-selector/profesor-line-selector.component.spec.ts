import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorLineSelectorComponent } from './profesor-line-selector.component';

describe('ProfesorLineSelectorComponent', () => {
  let component: ProfesorLineSelectorComponent;
  let fixture: ComponentFixture<ProfesorLineSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesorLineSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorLineSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
