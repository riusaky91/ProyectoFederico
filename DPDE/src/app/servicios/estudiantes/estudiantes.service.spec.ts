import { TestBed } from '@angular/core/testing';

import { EstudiantesService } from './Estudiantes.service';

describe('EstudiantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstudiantesService = TestBed.get(EstudiantesService);
    expect(service).toBeTruthy();
  });
});
