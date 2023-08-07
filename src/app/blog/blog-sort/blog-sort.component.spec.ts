import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSortComponent } from './blog-sort.component';

describe('BlogSortComponent', () => {
  let component: BlogSortComponent;
  let fixture: ComponentFixture<BlogSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSortComponent]
    });
    fixture = TestBed.createComponent(BlogSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
