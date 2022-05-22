import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styles: [`
    :host {
      height: 100%;
      position: absolute;
      width: 100%;
    }
  `]
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
