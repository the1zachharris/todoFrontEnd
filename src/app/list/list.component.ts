import { Component, OnInit } from '@angular/core';
import { IList } from './list.model';
import { ListService } from './list.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: IList[] = [];

  constructor(private listSvc: ListService) {}

  ngOnInit(): void {
    this.listSvc.getList().subscribe(list => {
      this.list = list;
    })

  }

  createList(newListitem: string): void{
    this.listSvc.createList(newListitem).subscribe(listItem => {
      this.list.push(listItem);
    });
  }

  deleteList(listItem: IList): void{
    this.listSvc.deleteList(listItem.id).subscribe(() => {
      this.list.splice(this.list.indexOf(listItem), 1);
    });
  }

}
