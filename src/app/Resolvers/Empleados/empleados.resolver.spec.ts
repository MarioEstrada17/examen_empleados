import { TestBed } from '@angular/core/testing';
import { EmpleadosResolver } from './empleados.resolver';

describe('EmpleadosResolver', () => {
  let resolver: EmpleadosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EmpleadosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
