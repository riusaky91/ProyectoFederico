import { TestBed } from '@angular/core/testing';

import { ActaSeguimientoDisciplinarioService } from './ActaSeguimientoDisciplinario.service';

describe('ActaSeguimientoDisciplinarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActaSeguimientoDisciplinarioService = TestBed.get(ActaSeguimientoDisciplinarioService);
    expect(service).toBeTruthy();
  });
});
