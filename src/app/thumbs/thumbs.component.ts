import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.scss']
})
export class Thumbs implements OnInit {
  @Input() items: { thumb: string; image: string }[] = [];
  @Input() currentIndex!: number;
  @Output() selectedCatalog = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
