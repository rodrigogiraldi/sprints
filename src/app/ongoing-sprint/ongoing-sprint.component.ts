import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PastSprintService } from '../past-sprint.service';
import { PastSprint } from '../past-sprint';

@Component({
  selector: 'app-ongoing-sprint',
  templateUrl: './ongoing-sprint.component.html',
  styleUrls: ['./ongoing-sprint.component.css']
})
export class OngoingSprintComponent implements OnInit {

  ongoing: PastSprint;

  progressReference: any;

  sprintStatus: string;

  constructor(private pastSprintService: PastSprintService, private router: Router) {
  }

  ngOnInit() {
    if (this.pastSprintService.ongoing){
      this.startSprint();
    }
    else{
      this.router.navigate(['/']);
    }
  }

  progressFunction() {
    return setInterval(() => {
      if (this.ongoing.progress < 100) {
        let newProgress = this.ongoing.progress += 0.1;
        newProgress = Math.round(newProgress * 100) / 100;
        this.ongoing.progress = newProgress;
      }
      else {
        clearInterval(this.progressReference);
        this.finishSprint('finished');
      }
    }, this.ongoing.duration);
  }

  startProgress() {
    this.progressReference = this.progressFunction();
    this.sprintStatus = 'ongoing';
  }

  pauseProgress() {
    clearInterval(this.progressReference);
    this.sprintStatus = 'paused';
  }


  startSprint() {
    this.ongoing = this.pastSprintService.ongoing;
    this.ongoing.startedAt = new Date();
    this.ongoing.createdAt = this.ongoing.startedAt;
    this.startProgress();
  }

  cancelSprint() {
    this.finishSprint('canceled');
  }

  finishSprint(status: string) {
    this.ongoing.status = status;
    this.ongoing.finishedAt = new Date();
    this.sprintStatus = status;
  }

  getFormattedDuration() {
    return this.ongoing.duration > 60 ? this.ongoing.duration / 60 + ' minutes' : this.ongoing.duration + ' seconds';
  }

  getFormattedDate(option: string) {

    let date;

    switch (option) {
      case 'createdAt':
        date = this.ongoing.createdAt;
        break;
      case 'startedAt':
        date = this.ongoing.startedAt;
        break;
      case 'finishedAt':
        date = this.ongoing.finishedAt;
        break;
    }

    let strDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
    let strTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return strDate + ' ' + strTime;
  }
}
