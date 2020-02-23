import { ICar } from './../model/Car.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public dataUpdate = new Subject<ICar[]>();
  private dataService: ICar[] = [
    { id: 1, name: 'Ford', power: 10, color: 'red', wheels: 4 },
    { id: 2, name: 'Seat', power: 12, color: 'white', wheels: 4 },
    { id: 3, name: 'Audi', power: 13, color: 'yellow', wheels: 4 },
    { id: 4, name: 'Ferrari', power: 14, color: 'black', wheels: 4 }
  ];

  loadData(): void {
    // Http request
    this.dataUpdate.next(this.dataService);
  }

}
