import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ICar } from '../../model/Car.model';
import { ITable } from '../../model/Table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, ITable<ICar> {

  @Input() dataSource: ICar[];
  @Input() showComponent = true;
  @Input() displayedColumns: string[];
  @Input() templateRef: TemplateRef<ICar>;
  showActions = false;
  actions = 'actions';

  ngOnInit(): void {
    if (this.displayedColumns === undefined || this.displayedColumns === null) {
      this.getColumnsName();
    }
  }

  private getColumnsName(): void {
    if (this.dataSource !== undefined && this.dataSource !== null) {
      if (this.displayedColumns === undefined || this.displayedColumns === null) {
        this.displayedColumns = Object.keys(this.dataSource[0]);
      } else {
        this.showActions = this.displayedColumns.includes(this.actions);
      }
    } else {
      this.showComponent = false;
    }
  }

}
