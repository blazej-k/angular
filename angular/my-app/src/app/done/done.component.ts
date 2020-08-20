import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../services/service.service';
import { TaskModel } from '../models/model-task';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit{

  constructor(private service: ServiceService, private router: Router){}

  doneObj: TaskModel = {
    doneTasks: [],
    finished: []
  };
  disabled = true;
  empty = true;

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
      this.doneObj = response;
      this.service.doneTasks = this.doneObj.doneTasks;
      this.service.finished = this.doneObj.finished;
      this.doneObj.finished.length > 0 ? this.disabled = false : this.disabled = true;
    });
    this.service.changeDisable().subscribe((response: boolean) => this.disabled = response);
  }
  removeAll(): any{
    this.service.removeAll().subscribe(() => {
      this.doneObj.doneTasks = this.service.doneTasks;
      this.doneObj.finished = this.service.finished;
    });
  }
}

