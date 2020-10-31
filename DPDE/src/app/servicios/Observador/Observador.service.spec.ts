import { TestBed } from '@angular/core/testing';

import { ObservadorService } from './Observador.service';

describe('ObservadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservadorService = TestBed.get(ObservadorService);
    expect(service).toBeTruthy();
  });
});     
