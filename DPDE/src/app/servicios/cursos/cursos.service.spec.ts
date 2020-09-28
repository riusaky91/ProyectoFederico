import { TestBed } from '@angular/core/testing';

import { CursosService } from './Cursos.service';

describe('CursosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosService = TestBed.get(CursosService);
    expect(service).toBeTruthy();
  });
});
