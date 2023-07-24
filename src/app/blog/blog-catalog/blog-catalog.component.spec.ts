import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCatalogComponent } from './blog-catalog.component';

describe('BlogCatalogComponent', () => {
    let component: BlogCatalogComponent;
    let fixture: ComponentFixture<BlogCatalogComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BlogCatalogComponent],
        });
        fixture = TestBed.createComponent(BlogCatalogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
