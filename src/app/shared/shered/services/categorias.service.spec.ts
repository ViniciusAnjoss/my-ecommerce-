import { TestBed } from '@angular/core/testing';

import { CategoriaService } from './categorias.service';

describe('CategoriasService', () => {
  let service: CategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});