import { TestBed } from '@angular/core/testing';

import { RegionesColombiaService } from './regiones-colombia.service';

describe('RegionesColombiaService', () => {
  let service: RegionesColombiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionesColombiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
