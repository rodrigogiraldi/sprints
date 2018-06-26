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
  needsPagination: boolean = true;
  paginationElements = [];

  constructor(private pastSprintService: PastSprintService) { }

  ngOnInit() {
    this.getSprints();
  }

  getSprints() {
    this.pastSprintService.getSprints()
      .subscribe(res => {
        this.pastSprints = res.data;
        this.pastSprintscurrentPage = this.pastSprints;
        this.generatePaginationElements();
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

  getActiveItemsPerPage(): any {
    return this.itemsPerPageElements.find(el => { return el.css.active == true });
  }

  checkIfNeedsPagination() {
    this.generatePaginationElements();
    let activeElement = this.getActiveItemsPerPage();
    if (this.pastSprintscurrentPage.length > activeElement.value) {
      this.needsPagination = true;
    }
    else {
      this.needsPagination = false;
    }
  }

  generatePaginationElements() {
    let numberOfPages = Math.ceil(this.pastSprintscurrentPage.length / this.getActiveItemsPerPage().value);

    let elements = [];
    elements.push({
      text: 'Previous',
      css: { disabled: true }
    });

    for (let i = 0; i < numberOfPages; i++) {
      elements.push({
        text: (i + 1).toString(),
        css: { disabled: false }
      });
    }

    elements.push({
      text: 'Next',
      css: { disabled: false }
    });

    this.paginationElements = elements;
  }
}