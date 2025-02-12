import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Catalog Viewer';
  catalogsList = [
    { thumb: '/assets/images/img-3.jpg', image: '/assets/images/img-3.jpg' },
    { thumb: '/assets/images/img-4.jpg', image: '/assets/images/img-4.jpg' },
    { thumb: '/assets/images/img-2.jpg', image: '/assets/images/img-2.jpg' },
    { thumb: '/assets/images/img-1.jpg', image: '/assets/images/img-1.jpg' }
  ];

  activeIndex: number = 0;
  slideDuration: number = 3000;
  slideshowInterval: any;

  selectedCatalog(index: number) {
    this.activeIndex = index;
    this.resetSlideshow();
  }

  toggleSlideShow(checked: boolean) {
    if (checked) {
      this.startSlideshow();
    } else {
      this.stopSlideshow();
    }
  }

  startSlideshow() {
    this.slideshowInterval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.catalogsList.length;
    }, this.slideDuration);
  }

  stopSlideshow() {
    clearInterval(this.slideshowInterval);
  }

  resetSlideshow() {
    this.stopSlideshow();
    const checkbox = document.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    if (checkbox && checkbox.checked) {
      this.startSlideshow();
    }
  }
}
