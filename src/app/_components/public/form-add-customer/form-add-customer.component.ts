import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment as GENERALS } from 'src/environments/environment.generals';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from '../../generals';
import { CloseModalService, StorageLocalService, NewUserService } from 'src/app/_services';

@Component({
  selector: 'add-customer',
  templateUrl: './form-add-customer.component.html',
  styleUrls: ['./form-add-customer.component.scss']
})
export class FormAddCustomerComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bottomSheet: MatBottomSheet,
    private closeModalService: CloseModalService,
    private storageLocalService: StorageLocalService,
    private newUserService: NewUserService
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.closeModalService.currentModalStatus.subscribe(
      message => {
        if (message) {
          this.bottomSheet.dismiss();
        }
      }
    );
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required, Validators.email]] // , Validators.pattern(GENERALS.regex_mail)]]
    });
  }

  get f() { return this.form.controls; }

  addCustomer(): void {
    if (this.form.valid) {
      
      this.storageLocalService.addCustomer(this.form.value);
      this.clearForm();
      this.newUserService.newUserStatus(false);
    }
  }

  private clearForm(): void {
    // this.form.controls['firstname'].setValue('');
    // this.form.controls['lastname'].setValue('');
    // this.form.controls['mail'].setValue('');
    this.form.reset();
    this.form.controls.firstname.setErrors(null);
    this.form.controls.lastname.setErrors(null);
    this.form.controls.mail.setErrors(null);
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}
