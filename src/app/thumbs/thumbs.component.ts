import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thumbs',
  templateUrl: './thumbs.component.html'
})
export class Thumbs implements OnInit {
  @Input() items: Array<{ thumb: string; image: string }> = []; // Correctly define the Input property
  @Input() currentIndex: number = 0; // Correctly define the current index property
  @Output() selectedCatalog: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  selectThumbnail(index: number) {
    this.selectedCatalog.emit(index);
  }
}
