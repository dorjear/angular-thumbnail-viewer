import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'viewer',
  templateUrl: './viewer.component.html'
})
export class Viewer implements OnInit {
  @Input() catalogImage?: string;

  constructor() {}

  ngOnInit() {}
}
