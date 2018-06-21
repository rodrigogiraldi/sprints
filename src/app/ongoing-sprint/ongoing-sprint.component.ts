import { Component, OnInit } from '@angular/core';
import { PastSprintService } from '../past-sprint.service';
import { PastSprint } from '../past-sprint';

@Component({
  selector: 'app-ongoing-sprint',
  templateUrl: './ongoing-sprint.component.html',
  styleUrls: ['./ongoing-sprint.component.css']
})
export class OngoingSprintComponent implements OnInit {

  ongoingString: string;

  constructor(private pastSprintService: PastSprintService) {
  }

  ngOnInit() {
    this.ongoingString = JSON.stringify(this.pastSprintService.ongoing, null, 2);
  }
}
