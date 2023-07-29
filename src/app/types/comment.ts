import { User } from "./user";

export interface Comment {
    _id: string;
    _ownerId: string;
    comment: string;
    user: User
    blogId: string;
    _createdOn: number;
}