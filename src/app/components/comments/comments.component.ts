import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCardFooter} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {NgForOf, NgIf} from "@angular/common";
import {MatBadge} from "@angular/material/badge";
import {Comment} from "../../models/comment";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    MatButton,
    MatCardFooter,
    MatList,
    MatListItem,
    NgForOf,
    NgIf,
    MatBadge
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  @Input()
  comments!: Comment[];
  collapseComments: boolean = false;

  showComments() {
    if (this.size() > 0) {
      this.collapseComments = !this.collapseComments;
    }
  }

  size() {
    return this.comments.length;
  }

}
