import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TaskModel } from '../models/model-task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  tasks = null;
  created = null;
  doneTasks = null;
  finished = null;
  private disable: boolean;
  private sub = new Subject<boolean>();

  checkUser(): any{
    return this.http.get('/api/checkUser', {
      responseType: 'text'
    });
  }

  getTask(): any{
    return this.http.get('/api/tasks');
  }

  addTask(task: TaskModel): any{
    this.tasks = task.tasks;
    this.created = task.created;
    return this.http.post('/api/saveTask', task);
  }

  finishTask(task: TaskModel): any{
    this.doneTasks = task.doneTasks;
    this.finished = task.finished;
    this.disable = false;
    this.sub.next(this.disable);
    return this.http.post('/api/finishTask', task);
  }

  removeTask(task, created): any{
    this.tasks = this.tasks.filter((e: any) => e !== task);
    this.created = this.created.filter((e: any) => e !== created);

    const remove = {
      tasks: this.tasks,
      created: this.created
    };

    return this.http.post('/api/remove', remove);
  }

  removeAll(): any{
    this.doneTasks = [];
    this.finished = [];
    this.disable = true;
    this.sub.next(this.disable);
    return this.http.get('api/removeAll');
  }

  logOut(): any{
    return this.http.get('api/logOut', {
      responseType: 'text'
    });
  }

  changeDisable(): Observable<boolean>{
    return this.sub.asObservable();
  }
}
