import {Pipe, PipeTransform} from '@angular/core';
import {Tutorial} from "../models/tutorial";

@Pipe({
  name: 'sortTutorialByDate',
  standalone: true
})
export class SortTutorialByDatePipe implements PipeTransform {

  transform(tutorials: Tutorial[], order: string): Tutorial[] {
    /*if (tutorials && tutorials.length > 0) {
      if (order === 'DESC') {
        return tutorials.sort((a, b) => {
          return b.createdDate.getTime() - a.createdDate.getTime();
        });
      } else {
        return tutorials.sort((a, b) => {
          return a.createdDate.getTime() - b.createdDate.getTime();
        });
      }
    }*/
    return tutorials;
  }
}
