import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Catalog Viewer';
  catalogsList = [
    { thumb: '/assets/images/tea-light-candle.jpg', image: '/assets/images/tea-light-candle.jpg' },
    { thumb: '/assets/images/white-light-candle.jpg', image: '/assets/images/white-light-candle.jpg' },
    { thumb: '/assets/images/pink-light-candle.jpg', image: '/assets/images/pink-light-candle.jpg' },
    { thumb: '/assets/images/green-light-candle.jpg', image: '/assets/images/green-light-candle.jpg' },
  ];
  activeIndex: number = 0;
  slideDuration = 3000;
  autoSlideInterval: any;

  selectedCatalog(index: number) {
    this.activeIndex = index;
    this.stopSlideShow();
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.catalogsList.length;
  }

  previousSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.catalogsList.length) % this.catalogsList.length;
  }

  toggleSlideShow(start: boolean) {
    this.stopSlideShow();
    if (start) {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, this.slideDuration);
    }
  }

  stopSlideShow() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }
}
