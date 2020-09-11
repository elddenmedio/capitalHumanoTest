import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { NewUserService } from './new-user.service';

const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class StorageLocalService {
  _userOld;
  _userTmp = [];

  constructor(
    private newUserService: NewUserService
  ) { }

  addCustomer(user: any): void {
    this._userTmp = [];
    let _user = {
      first: user.firstname,
      last: user.lastname,
      email: user.mail,
      created: moment(new Date()).format("MMMM D, YYYY")
    };

    if (this._userOld = this.getUsers()) {
      if (this._userOld.length > 1) {
        this._userOld.forEach(element => {
          this._userTmp.push(element);
        });
      } else {
        this._userTmp.push(this._userOld);
      }

      this._userTmp.push(_user);
    }

    this.deleteSession();
    sessionStorage.setItem(USER, JSON.stringify((this._userTmp.length > 0) ? this._userTmp : _user));

    this.newUserService.newUserStatus(true);
  }

  getUsers(): any {
    return JSON.parse(sessionStorage.getItem(USER)) || null;
  }

  deleteSession(): void {
    sessionStorage.removeItem(USER);
  }
}
