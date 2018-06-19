import { Component, OnInit } from '@angular/core';

import { SprintTemplate } from '../sprint-template';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {

  sprintTemplates: SprintTemplate[] = [];

  constructor() { }

  ngOnInit() {
    this.sprintTemplates = [
      {name: 'Instant', duration: 5, status: ""},
      {name: 'Very Short', duration: 300, status: ""},
      {name: 'Short', duration: 600, status: ""},
      {name: 'Pomodoro', duration: 1500, status: ""},
      {name: 'Long', duration: 2700, status: ""},
      {name: 'Very Long', duration: 3600, status: ""}
    ]
  }

}
