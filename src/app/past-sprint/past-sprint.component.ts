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

  constructor(private pastSprintService: PastSprintService) { }

  ngOnInit() {
    this.getSprints();
  }

  getSprints() {
    this.pastSprintService.getSprints()
      .subscribe(res => {
        this.pastSprints = res.data;
      })
  }
}
