import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Version } from './version';

@Injectable()
export class VersionService {
  private versionUrl: string;
  constructor(private http: HttpClient) {
    this.versionUrl = 'http://localhost:8080/helloo';
  }
  public findAll(): Observable<Version[]> {
    return this.http.get<Version[]>(this.versionUrl);
  }
}

