import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Time } from '../services/time.service';
import { TaskModel } from '../models/model-task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent implements OnInit {

  constructor(private service: ServiceService, private time: Time, private router: Router){}

  taskObj: TaskModel = {
    tasks: [],
    created: []
  };

  ngOnInit(): any{
    this.service.checkUser().subscribe((response) => {
      if (response !== 'is'){
        this.router.navigate(['/']);
      }
      else{
        return;
      }
    });
    this.service.getTask().subscribe((response: TaskModel) => {
      this.taskObj = response;
      this.service.tasks = this.taskObj.tasks;
      this.service.created = this.taskObj.created;
    });
  }
  remove(task: string, created: string): any{
    this.service.removeTask(task, created).subscribe();
    this.taskObj.tasks = this.service.tasks;
    this.taskObj.created = this.service.created;
  }

  finish(task2: string, created2: string): any{
    this.remove(task2, created2);
    const tab = this.time.getTime();

    const doneTasks2 = this.service.doneTasks;
    doneTasks2.push(task2);
    const finished2 = this.service.finished;
    finished2.push(`${created2.slice(0, -3)} - ${tab[0]}/${tab[1]} ${tab[2]}:${tab[3]}`);

    const finishedTask = ({
      doneTasks: doneTasks2,
      finished: finished2
    });
    this.service.finishTask(finishedTask).subscribe();
  }
}
