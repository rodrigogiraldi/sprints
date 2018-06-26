import { Component, OnInit } from '@angular/core';
import { PastSprint } from '../past-sprint';
import { PastSprintService } from '../past-sprint.service';

@Component({
  selector: 'app-past-sprint',
  templateUrl: './past-sprint.component.html',
  styleUrls: ['./past-sprint.component.css']
})
export class PastSprintComponent implements OnInit {

  pastSprints: PastSprint[];
  pastSprintscurrentPage: PastSprint[] = [];
  itemsPerPageElements: any[] = [
    { value: 5, css: { active: false } },
    { value: 10, css: { active: true } },
    { value: 25, css: { active: false } }
  ];
  currentPage: number = 0;
  needsPagination: boolean = true;

  constructor(private pastSprintService: PastSprintService) { }

  ngOnInit() {
    this.getSprints();
  }

  getSprints() {
    this.pastSprintService.getSprints()
      .subscribe(res => {
        this.pastSprints = res.data;
        this.pastSprintscurrentPage = this.pastSprints;
      })
  }

  changeItemsPerPage(itemText) {
    this.itemsPerPageElements = this.itemsPerPageElements.map((current, index, arr) => {
      if (current.value == itemText) {
        current.css.active = true;

      } else {
        current.css.active = false;
      }
      return current;
    });

    this.checkIfNeedsPagination();
  }

  getActive(): any {
    return this.itemsPerPageElements.find(el => { return el.css.active == true });
  }

  checkIfNeedsPagination() {
    let activeElement = this.getActive();
    if (this.pastSprintscurrentPage.length > activeElement.value) {
      this.needsPagination = true;
    }
    else {
      this.needsPagination = false;
    }
  }
}