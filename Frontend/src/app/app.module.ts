import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfRegComponent } from './components/prof-reg/prof-reg.component';
import { StudRegComponent } from './components/stud-reg/stud-reg.component';
import { CreatCourseComponent } from './components/creat-course/creat-course.component';
import { FormsModule } from '@angular/forms';
import { PProfileComponent } from './components/p-profile/p-profile.component';
import { SProfileComponent } from './components/s-profile/s-profile.component';
import { ScourseVwComponent } from './components/scourse-vw/scourse-vw.component';
import { StudApplyComponent } from './components/stud-apply/stud-apply.component';
import { RegVwComponent } from './components/reg-vw/reg-vw.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfHomeComponent } from './components/prof-home/prof-home.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfRegComponent,
    StudRegComponent,
    CreatCourseComponent,
    PProfileComponent,
    SProfileComponent,
    ScourseVwComponent,
    StudApplyComponent,
    RegVwComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    ProfHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
