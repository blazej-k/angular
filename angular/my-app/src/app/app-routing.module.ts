import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path: '', component: SignInComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'todo', component: TasksComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
