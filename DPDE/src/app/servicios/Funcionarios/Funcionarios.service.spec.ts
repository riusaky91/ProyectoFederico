import { TestBed } from '@angular/core/testing';

import { FuncionariosService } from './Funcionarios.service';

describe('FuncionariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionariosService = TestBed.get(FuncionariosService);
    expect(service).toBeTruthy();
  });
});     
