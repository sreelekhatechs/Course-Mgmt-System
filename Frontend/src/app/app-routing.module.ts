import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatCourseComponent } from './components/creat-course/creat-course.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PProfileComponent } from './components/p-profile/p-profile.component';
import { ProfRegComponent } from './components/prof-reg/prof-reg.component';
import { RegVwComponent } from './components/reg-vw/reg-vw.component';
import { RegisterComponent } from './components/register/register.component';
import { SProfileComponent } from './components/s-profile/s-profile.component';
import { StudApplyComponent } from './components/stud-apply/stud-apply.component';
import { StudRegComponent } from './components/stud-reg/stud-reg.component';

const routes: Routes = [{path:"pro",component:PProfileComponent},
{path:"stu",component:SProfileComponent},
{path:"preg",component:ProfRegComponent},
{path:"sreg",component:StudRegComponent},
{path:"login",component:LoginComponent},
{path:"",component:HomeComponent},
{path:"register",component:RegisterComponent},
{path:"pro/coursecr",component:CreatCourseComponent},
{path:"stu/studapply",component:StudApplyComponent},
{path:"pro/regvw",component:RegVwComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
