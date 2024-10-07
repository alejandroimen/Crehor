import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorLineComponent } from './profesor-line.component';

describe('ProfesorLineComponent', () => {
  let component: ProfesorLineComponent;
  let fixture: ComponentFixture<ProfesorLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesorLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
