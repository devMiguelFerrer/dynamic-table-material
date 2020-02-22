import { ICar } from './../model/Car.model';
import { ITable } from './../model/Table.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, ITable<ICar> {

  @Input() dataSource: ICar[];
  @Input() showComponent = true;
  @Output() emitEvent = new EventEmitter<any>();
  @Input() displayedColumns: string[];

  ngOnInit(): void {
    if (this.displayedColumns === undefined || this.displayedColumns === null) {
      this.getColumnsName();
    }
  }

  private getColumnsName(): void {
    if (this.dataSource !== undefined && this.dataSource !== null) {
      this.displayedColumns = Object.keys(this.dataSource[0]);
    } else {
      this.showComponent = false;
    }
  }

}
