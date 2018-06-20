import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { SprintTemplate } from '../sprint-template';
import { SprintTemplateService } from '../sprint-template.service';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {

  sprintTemplates: SprintTemplate[] = [];

  constructor(private sprintTemplateService: SprintTemplateService) { }

  ngOnInit() {
    this.sprintTemplateService.getSprints()
      .subscribe(res => this.sprintTemplates = res.data);
  }

}
