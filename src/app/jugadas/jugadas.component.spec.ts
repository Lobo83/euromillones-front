import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadasComponent } from './jugadas.component';

describe('JugadasComponent', () => {
  let component: JugadasComponent;
  let fixture: ComponentFixture<JugadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
