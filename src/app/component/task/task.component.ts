import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/model/task-list.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskList: Task[];
  //search: FormGroup;
  cardViewBoolean: boolean;
  searchText: string;
  constructor(private router: Router, private taskService: TaskService) {
  //   this.search = new FormGroup({
  //     searchText: new FormControl('')
  //  });
  }

  ngOnInit(): void {
    this.taskService.taskService().subscribe((data: Task[]) => {
      this.taskList = data;
    });
  }

  logout() {
    this.router.navigate(['/Login']);
    localStorage.removeItem('User');
    localStorage.removeItem('Password');
  }

  cardView() {
    this.cardViewBoolean = true;
  }

  tableView() {
    this.cardViewBoolean = false;
  }
}
