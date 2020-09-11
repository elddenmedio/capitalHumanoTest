import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormAddCustomerComponent } from '../../public';
import { CloseModalService } from 'src/app/_services';

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.component.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.component.scss']
})
export class BottomSheetOverviewExampleSheetComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<FormAddCustomerComponent>,
    private closeModalService: CloseModalService
  ) { }

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    this.closeModal();
  }

  closeModal(): void {
    setTimeout(() => {
      this.closeModalService.changeModalStatus(true);
    }, 600);
  }
}
