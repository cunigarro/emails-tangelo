import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    :host {
      height: 100%;
      position: absolute;
      width: 100%;
    }
  `]
})
export class AppComponent {
  title = 'emails-tangelo';
}
