import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IntroComponent } from './sections/intro/intro.component';
import { ProfileContactComponent } from './sections/profile-contact/profile-contact.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { ResumeService } from './sections/resume/resume.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProfileContactComponent,
    ProfileComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
