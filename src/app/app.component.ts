import { LangService } from './core/services/lang.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  dir = 'rtl';
  constructor(private _LangService:LangService) {
    this._LangService.dir.subscribe(dir => {
      this.dir = dir;
    });
  }
}
