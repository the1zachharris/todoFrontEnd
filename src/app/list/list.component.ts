import { Component, OnInit } from '@angular/core';
import { IList } from './list.model';
import { ListService } from './list.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: any;

  constructor(private listSvc: ListService) {}

  ngOnInit(): void {
    this.listSvc.getList().subscribe(list => {
      this.list = list;
    })
  }
}
