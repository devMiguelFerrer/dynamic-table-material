import { EventEmitter } from '@angular/core';

export interface ITable<T> {
  dataSource: T[];
  showComponent: boolean;
  emitEvent: EventEmitter<T>;
  displayedColumns: string[];
}
