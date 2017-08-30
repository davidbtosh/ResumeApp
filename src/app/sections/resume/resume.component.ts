import { Component, OnInit } from '@angular/core';
import { IJob } from './job';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  jobs: IJob[] = [];
  errorMessage: string;

  constructor(private _resumeService: ResumeService) { }

  ngOnInit() {
     // this.jobs = this._resumeService.getJobs();
    this._resumeService.getJobs()
      .subscribe(jobs => {
      this.jobs = jobs;        
    },
    error => this.errorMessage = <any>error);
  }
  
}
