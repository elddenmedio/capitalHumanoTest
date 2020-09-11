import { TestBed } from '@angular/core/testing';

import { TranslateComponentService } from './translate-component.service';

describe('TranslateComponentService', () => {
  let service: TranslateComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
