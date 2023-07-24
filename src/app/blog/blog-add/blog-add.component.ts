import { Component } from '@angular/core';

@Component({
    selector: 'app-blog-add',
    templateUrl: './blog-add.component.html',
    styleUrls: ['./blog-add.component.css'],
})
export class BlogAddComponent {
    blog: any = {
        title: '',
        category: '',
        link: '',
        imageUrl: '',
        content: '',
    };

    submitForm(form: any) {
        if (form.valid) {
            // Handle form submission here
            console.log('Form submitted successfully!');
            console.log(this.blog); // Access form data through the blog object
        }
    }
}
