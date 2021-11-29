import { TestBed } from '@angular/core/testing';

import { JugadasService } from './jugadas.service';

describe('JugadasService', () => {
  let service: JugadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
