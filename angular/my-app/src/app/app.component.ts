import { Component, DoCheck } from '@angular/core';
import { ServiceService } from './services/service.service';
import { TaskModel } from './models/model-task';
import { Time } from './services/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  // constructor(private service: ServiceService, private time: Time){}

  // disabled = true;
  // newTask = '';

  // ngDoCheck(): any{
  //   this.newTask.length !== 0 ? this.disabled = false : this.disabled = true;
  // }

  // add(): any{
  //   const tab = this.time.getTime();
  //   const task: TaskModel = ({
  //     task: this.newTask,
  //     created: `${tab[0]}/${tab[1]} ${tab[2]}:${tab[3]}`,
  //   });
  //   this.service.addTask(task).subscribe();
  //   this.newTask = '';
  // }
}
