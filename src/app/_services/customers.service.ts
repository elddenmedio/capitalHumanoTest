import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RandomAPIModel } from './../_models';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient
  ) { }

  getCustomers(fmt: string = "raw", sole: string = ""): Observable<RandomAPIModel[]> {
    return this.http.get<RandomAPIModel[]>(environment.endpoint_api, { params: { fmt: fmt, sole: sole } });
  }
}
