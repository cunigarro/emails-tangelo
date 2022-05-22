import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [`
    :host {
      height: 100%;
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class LayoutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
