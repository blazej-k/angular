import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DoneComponent } from './done/done.component';
import { ToDoComponent } from './to-do/to-do.component';
import { Time } from './services/time.service';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    DoneComponent,
    ToDoComponent,
    UpperCasePipe,
    AddComponent,
    SignInComponent,
    RegisterComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Time],
  bootstrap: [AppComponent]
})
export class AppModule { }
