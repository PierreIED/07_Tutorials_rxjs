import {User} from "./user";
import {Category} from "./category";
import {Comment} from "./comment";

export interface Tutorial {
  id: number;
  title: string;
  description: string;
  content: string;
  author: User;
  category: Category;
  createdDate: string;
  comments: Comment[];
}
