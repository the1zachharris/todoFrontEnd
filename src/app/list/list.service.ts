import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IList } from './list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getList(): Observable<IList[]> {
    return this.http.get<IList[]>('/api/list')
  }

  createList(listItem: string): Observable<IList> {
    let newListitem = {
      Name: listItem
    }
    return this.http.post<IList>('/api/list', newListitem)
  }

  deleteList(id: number) {
    return this.http.delete('/api/list/' + id)
  }

}
