import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { TaskComponent } from './component/task/task.component'
import { AuthenticationGuard } from './auth_guard/authentication.guard'
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
 },
  {
    path: 'Login',
    component: LoginComponent
 },
 {
   path: 'Task',
   component: TaskComponent,
   canActivate: [AuthenticationGuard],
 },
 {
   path: '**',
   component: PageNotFoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
