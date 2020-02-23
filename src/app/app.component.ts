import { TableService } from './services/table.service';
import { ICar } from './model/Car.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  appDataSource: ICar[];
  appDisplayedColumns = ['name', 'power', 'color', 'actions'];
  tableSubscription: Subscription;

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableSubscription = this.tableService.dataUpdate.subscribe(respService => {
      this.appDataSource = respService;
    });
    this.tableService.loadData();
  }

  ngOnDestroy(): void {
    this.tableSubscription.unsubscribe();
  }

}
