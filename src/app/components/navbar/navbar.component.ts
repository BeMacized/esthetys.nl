import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'est-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  collapsed = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleNav = () => {
    console.log('TOGGLE');
    this.collapsed = !this.collapsed;
  }

}
