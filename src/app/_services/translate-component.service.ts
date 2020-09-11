import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateComponentService {

  constructor(
    private translate: TranslateService
  ) {
  }

  getTranslate(translate: string): Promise<string> {
    return new Promise(resolve => {
      this.translate.get(translate).subscribe(
        text => {
          resolve(text);
        });
    });
  }
}
