import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  private userStatus = new BehaviorSubject(false);
  currentUserStatus = this.userStatus.asObservable();

  constructor() { }

  newUserStatus(newUser: boolean) {
    this.userStatus.next(newUser);
  }
}
