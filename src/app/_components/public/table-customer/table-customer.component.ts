import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RandomAPIModel } from 'src/app/_models';
import { CustomersService, TranslateComponentService, NewUserService, StorageLocalService } from 'src/app/_services';

@Component({
  selector: 'table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class TableCustomerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'created', 'email', 'document'];
  dataSource = new MatTableDataSource<RandomAPIModel>();

  constructor(
    private customerService: CustomersService,
    private translateComponentService: TranslateComponentService,
    private newUserService: NewUserService,
    private storageLocalService: StorageLocalService
  ) { 
    this.newUserService.currentUserStatus.subscribe(
      status => {
        if (status) {
          this.callCustomers(true, this.storageLocalService.getUsers());
        }
      }
    );
  }

  ngOnInit(): void {
    this.callCustomers(false);
  }

  private callCustomers(reload: boolean, newUser?): void {
    let _customers = [];

    if (newUser) {
      if (newUser.length > 1) {
        newUser.forEach(element => { _customers.push(element) });
      } else {
        _customers.push(newUser);
      }
    }

    this.customerService.getCustomers().subscribe(
      succ => {
        if (!reload) {
          let _users = this.storageLocalService.getUsers();
          if (_users) {
            if (_users.length > 1) {
              _users.forEach(element => { _customers.push(element) });
            } else {
              _customers.push(_users);
            }
          }
        }

        succ.forEach(element => { _customers.push(element) });

        this.dataSource = new MatTableDataSource<RandomAPIModel>(_customers);
        this.dataSource.paginator = this.paginator;
        this.translateComponentService.getTranslate("TABLE.PAGINATOR.items-pare-page").then(
          text => {
            this.paginator._intl.itemsPerPageLabel = text;
          }
        );
        this.dataSource.sort = this.sort;
      },
      err => {
        debugger
      }
    );
  }
}
