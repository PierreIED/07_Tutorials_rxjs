import {Component} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import {CategoriesService} from "../../services/categories.service";
import {Observable} from "rxjs";
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NgForOf,
    MatActionList,
    MatCard,
    MatListItem,
    AsyncPipe
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories$: Observable<Category[]> = this.categoriesService.getAll();

  constructor(private categoriesService: CategoriesService) {
  }


}
