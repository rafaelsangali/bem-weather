import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCityComponent } from './search-city.component';

describe('SearchCityComponent', () => {
  let component: SearchCityComponent;
  let fixture: ComponentFixture<SearchCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCityComponent],
    });
    fixture = TestBed.createComponent(SearchCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
