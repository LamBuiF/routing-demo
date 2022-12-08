import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'profile/:userId', component: ProfileComponent},
  {path:'register', component: RegisterComponent},
  {path:'help', component: HelpComponent},
  {path:'courses', component: CourseNavigatorComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
