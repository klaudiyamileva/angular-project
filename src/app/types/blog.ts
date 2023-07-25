import { User } from "./user";

export interface Blog {
    _id: string;
    _ownerId: string;
    title: string;
    category: string;
    link: string;
    content: string;
    imageUrl: string;
    _createdOn: number;
    user: User;
}
