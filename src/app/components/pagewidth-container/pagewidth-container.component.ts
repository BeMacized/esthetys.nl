import {Component, HostBinding, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'est-pagewidth-container',
  templateUrl: './pagewidth-container.component.html',
  styleUrls: ['./pagewidth-container.component.scss']
})
export class PagewidthContainerComponent implements OnInit, OnChanges {

  @Input() hGutter = false;
  @Input() vGutter = false;
  @HostBinding('class.h-gutter') hGutterClass = false;
  @HostBinding('class.v-gutter') vGutterClass = false;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.hGutterClass = this.hGutter;
    this.vGutterClass = this.vGutter;
  }

}
