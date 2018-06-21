import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { SprintTemplate } from './sprint-template';
import { ResponseAPI } from './response-api';

@Injectable({
  providedIn: 'root'
})
export class SprintTemplateService {

  private sprintTemplateUrl = 'http://localhost:3000/api/sprintTemplates';

  constructor(private httpClient: HttpClient) { }

  getSprints(): Observable<ResponseAPI> {
    return this.httpClient.get<ResponseAPI>(this.sprintTemplateUrl, {
      headers: new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('access_token')}`)
    });
  }
}
