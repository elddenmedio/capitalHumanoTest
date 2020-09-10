import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

  constructor() { }

  ngOnInit(): void {
  }

}
