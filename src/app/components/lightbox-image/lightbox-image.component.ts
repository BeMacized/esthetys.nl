import {Component, Input, OnInit} from '@angular/core';
import {Lightbox} from 'angular2-lightbox';


@Component({
  selector: 'est-lightbox-image',
  templateUrl: './lightbox-image.component.html',
  styleUrls: ['./lightbox-image.component.scss']
})
export class LightboxImageComponent implements OnInit {

  @Input() src: string;
  @Input() caption: string;

  constructor(private lightbox: Lightbox) {
  }

  ngOnInit() {
  }

  openLightbox(): void {
    this.lightbox.open([{
      src: this.src,
      caption: this.caption,
      thumb: this.src
    }]);
  }

}
