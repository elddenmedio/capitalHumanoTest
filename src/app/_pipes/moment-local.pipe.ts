import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentLocal'
})
export class MomentLocalPipe implements PipeTransform {
  private userLang: string;

  constructor() {
    let _userLang = navigator.language.split('-'); // || navigator.userLanguage;
    this.userLang = 'es'; // _userLang[0];
    moment.lang(this.userLang);
  }

  transform(date: string, ...args: unknown[]): unknown {
    let _return;
    switch (args[0]) {
      case 1:
        _return = (this.userLang.toLowerCase() === 'es') ? moment(date).format('LL') : moment(date).format('MM/DD/YYYY');
        break;
      default:
        _return = (this.userLang.toLowerCase() === 'es') ? moment(date).format('DD [de] M [del] YYYY') : moment(date).format('MMM Do YYYY');
        break;
    }

    return _return;
  }
}
