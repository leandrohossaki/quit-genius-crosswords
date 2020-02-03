import { TestBed } from '@angular/core/testing';

import { AWSCognitoService } from './awscognito.service';

describe('AWSCognitoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AWSCognitoService = TestBed.get(AWSCognitoService);
    expect(service).toBeTruthy();
  });
});
