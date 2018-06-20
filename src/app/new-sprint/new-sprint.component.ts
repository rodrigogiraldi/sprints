import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { SprintTemplate } from '../sprint-template';
import { SprintTemplateService } from '../sprint-template.service';
import { PastSprintService } from '../past-sprint.service';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {

  sprintTemplates: SprintTemplate[] = [];
  selectedTemplate: SprintTemplate;
  sprintDescription: string;

  constructor(private sprintTemplateService: SprintTemplateService, private pastSprintService: PastSprintService) { }

  ngOnInit() {
    this.sprintTemplateService.getSprints()
      .subscribe(res => {
        this.sprintTemplates = res.data;
        if (this.sprintTemplates.length > 0) {
          this.selectedTemplate = this.sprintTemplates[0];
        }
      });
  }

  create() {
    this.pastSprintService.create(this.selectedTemplate, this.sprintDescription);
  }

  compareSprintTemplate(st1: SprintTemplate, st2: SprintTemplate) {
    return st1 && st2 ? st1.name === st2.name : st1 === st2;
  }
}
