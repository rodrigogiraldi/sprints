import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PastSprint } from './past-sprint';
import { SprintTemplate } from './sprint-template';
import { Observable } from 'rxjs';
import { ResponseAPI } from './response-api';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PastSprintService {

  private pastSprintUrl = 'http://localhost:3000/api/pastSprints';

  ongoing: PastSprint;

  lastOrderedField = {
    field: "",
    asc: true
  }

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

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
      this.pastSprintUrl,
      pastSprint,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      }
    );
  }

  getSprints(): Observable<ResponseAPI> {
    let userId = this.auth.getUserId();
    let getSprintsUrl = `${this.pastSprintUrl}/${userId}`;

    return this.httpClient.get<ResponseAPI>(
      getSprintsUrl,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      }
    )
  }

  createSearchableProperty(pastSprint: PastSprint): string {
    return (pastSprint.name + pastSprint.status + pastSprint.description).toLowerCase();
  }

  setSearchablePropertyToPastSprints(pastSprints: PastSprint[]) {
    for (let i = 0; i < pastSprints.length; i++) {
      pastSprints[i].searchableString = this.createSearchableProperty(pastSprints[i]);
    }

    return pastSprints;
  }

  sortPastSprints(pastSprints: PastSprint[], fieldToOrderBy: string) {

    if (this.lastOrderedField.field == fieldToOrderBy && this.lastOrderedField.asc) {
      pastSprints.sort((ps1, ps2) => {
        return ps1[fieldToOrderBy] > ps2[fieldToOrderBy] ? -1 : 1;
      });
    }
    else {
      pastSprints.sort((ps1, ps2) => {
        return ps1[fieldToOrderBy] > ps2[fieldToOrderBy] ? 1 : -1;
      });
    }

    if (this.lastOrderedField.field == fieldToOrderBy) {
      this.lastOrderedField.asc = !this.lastOrderedField.asc
    }
    else {
      this.lastOrderedField.field = fieldToOrderBy;
      this.lastOrderedField.asc = true;
    }
  }
}
