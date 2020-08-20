import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { TaskModel } from '../models/model-task';
import { Time } from '../services/time.service';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs/operators';
import { fromEvent, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private service: ServiceService, private time: Time, private router: Router){}

  disabled = true;
  newTask = '';

  throttleTimeConfig = {
    leading: false,
    trailing: true
  };


  ngOnInit(): any{
    const input = document.querySelector('#el');
    const input2 = fromEvent(input, 'input');
    input2
    .pipe(throttleTime(1000, asyncScheduler, this.throttleTimeConfig))
    .subscribe(() => {
      this.newTask.length !== 0 ? this.disabled = false : this.disabled = true;
    });
  }

  add(): any{
    let next = false;
    if (this.newTask === ''){
      this.disabled = true;
      return;
    }
    for (let i = 0; i < this.newTask.length; i++){
      if (this.newTask.charAt(i) === ' ') {
        continue;
      }
      else {
        next = true;
        break;
      }
    }
    if (next === false){
      this.newTask = '';
      alert('You have to write something!');
      return;
    }
    const tab = this.time.getTime();
    let quanity = 1;
    let newTaskCopy = this.newTask;
    const tasks2 = this.service.tasks;

    for (let i = 0; i <= tasks2.length; i++) {
      if (newTaskCopy === tasks2[i]){
        quanity++;
        newTaskCopy = `${this.newTask}(${quanity})`;
        i = 0;
      }
    }
    if (quanity > 1){
      this.newTask = newTaskCopy;
    }

    tasks2.push(this.newTask);
    const created2 = this.service.created;
    created2.push(`${tab[0]}/${tab[1]} ${tab[2]}:${tab[3]}:${tab[4]}`);

    const task: TaskModel = ({
      tasks: tasks2,
      created: created2,
    });

    this.service.addTask(task).subscribe();
    this.newTask = '';
    this.disabled = true;
  }

  logOut(): any{
    this.service.logOut().subscribe((response) => {
      if (response){
        this.router.navigate(['/']);
        location.reload();
      }
    });
  }
}

