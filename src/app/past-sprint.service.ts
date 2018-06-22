import { Injectable } from '@angular/core';

import { PastSprint } from './past-sprint';
import { SprintTemplate } from './sprint-template';

@Injectable({
  providedIn: 'root'
})
export class PastSprintService {

  ongoing: PastSprint;

  constructor() { }

  create(sprintTemplate: SprintTemplate, description: string) {
    let pastSprint = new PastSprint();
    pastSprint.name = sprintTemplate.name;
    pastSprint.duration = sprintTemplate.duration;
    pastSprint.status = sprintTemplate.status;
    pastSprint.description = description;
    pastSprint.progress = 0;

    this.ongoing = pastSprint;
  }
}
