import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PastSprint } from './past-sprint';
import { SprintTemplate } from './sprint-template';
import { Observable } from 'rxjs';
import { ResponseAPI } from './response-api';

@Injectable({
  providedIn: 'root'
})
export class PastSprintService {

  private sprintTemplateUrl = 'http://localhost:3000/api/pastSprints';

  ongoing: PastSprint;

  constructor(private httpClient: HttpClient) { }

  create(sprintTemplate: SprintTemplate, description: string, notify: boolean) {
    let pastSprint = new PastSprint();
    pastSprint.name = sprintTemplate.name;
    pastSprint.duration = sprintTemplate.duration;
    pastSprint.status = sprintTemplate.status;
    pastSprint.description = description;
    pastSprint.notify = notify;
    pastSprint.progress = 0;

    this.ongoing = pastSprint;
  }

  save(pastSprint: PastSprint): Observable<ResponseAPI> {
    return this.httpClient.post<ResponseAPI>(
      this.sprintTemplateUrl,
      pastSprint,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      }
    );
  }
}
