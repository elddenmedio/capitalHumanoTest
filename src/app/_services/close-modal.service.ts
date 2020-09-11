import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloseModalService {
  private modalStatus = new BehaviorSubject(false);
  currentModalStatus = this.modalStatus.asObservable();

  constructor() { }

  changeModalStatus(message: boolean) {
    this.modalStatus.next(message)
  }
}
