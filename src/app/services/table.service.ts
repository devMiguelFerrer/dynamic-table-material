import { ICar } from './../model/Car.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public dataUpdate = new Subject<ICar[]>();
  private dataService: ICar[] = [
    { name: 'Focus', power: 10, color: 'red' },
    { name: 'Leon', power: 12, color: 'white' },
    { name: 'Ferrari', power: 14, color: 'black' }
  ];

  loadData(): void {
    // Http request
    this.dataUpdate.next(this.dataService);
  }

}
