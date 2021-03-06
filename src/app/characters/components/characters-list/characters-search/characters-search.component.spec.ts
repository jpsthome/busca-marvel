import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSearchComponent } from './characters-search.component';

describe('CharactersSearchComponent', () => {
  let component: CharactersSearchComponent;
  let fixture: ComponentFixture<CharactersSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
