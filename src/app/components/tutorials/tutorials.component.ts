import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatChip, MatChipListbox} from "@angular/material/chips";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {SortTutorialByDatePipe} from "../../pipes/sort-tutorial-by-date.pipe";
import {MatBadge} from "@angular/material/badge";
import {HoverHighlightDirective} from "../../directives/hover-highlight.directive";
import {CommentsComponent} from "../comments/comments.component";
import {TutorialsService} from "../../services/tutorials.service";
import {Observable} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Tutorial} from "../../models/tutorial";

@Component({
  selector: 'app-tutorials',
  standalone: true,
  imports: [
    NgForOf,
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatChipListbox,
    MatChip,
    UpperCasePipe,
    MatDivider,
    MatCardActions,
    DatePipe,
    MatButton,
    MatIconModule,
    MatCardFooter,
    NgIf,
    MatList,
    MatListItem,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    SortTutorialByDatePipe,
    MatBadge,
    HoverHighlightDirective,
    CommentsComponent,
    AsyncPipe,
    MatProgressSpinner
  ],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css'
})
export class TutorialsComponent {

  tutorials$: Observable<Tutorial[]> = this.tutorialService.getAll();
  sortByDate: string = "DESC";

  constructor(private tutorialService: TutorialsService) {
  }

}
