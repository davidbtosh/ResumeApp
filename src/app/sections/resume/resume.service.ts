import { Injectable } from '@angular/core';
import { IJob } from './job';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ResumeService {
     // private _jobsUrl = './api/jobs.json';
    // private _jobsUrl = 'http://localhost:1027/api/products';

    private _jobsUrl = 'http://mtoshresumeapi.azurewebsites.net/api/jobs';

     constructor(private _http: HttpClient) { }

    getJobs(): Observable<IJob[]> {

        const list = this._http.get<IJob[]>(this._jobsUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);

        return list;
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
