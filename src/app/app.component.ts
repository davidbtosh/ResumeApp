import { Component } from '@angular/core';
import { ResumeService } from './sections/resume/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ResumeService ]
})
export class AppComponent {
  title = 'app';
}
