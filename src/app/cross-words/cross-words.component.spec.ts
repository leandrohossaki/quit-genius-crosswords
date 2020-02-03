import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossWordsComponent } from './cross-words.component';

describe('CrossWordsComponent', () => {
  let component: CrossWordsComponent;
  let fixture: ComponentFixture<CrossWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
