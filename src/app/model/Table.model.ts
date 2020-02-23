import { TemplateRef } from '@angular/core';

export interface ITable<T> {
  dataSource: T[];
  showComponent: boolean;
  displayedColumns: string[];
  templateRef: TemplateRef<T>;
}
