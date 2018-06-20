import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { SprintTemplate } from './sprint-template';

@Injectable({
  providedIn: 'root'
})
export class SprintTemplateService {

  private sprintTemplateUrl = 'http://localhost:3000/api/sprintTemplates';

  constructor(private httpClient: HttpClient) { }

  getSprints():Observable<any>{
    return this.httpClient.get<any>(this.sprintTemplateUrl);
  }
}
