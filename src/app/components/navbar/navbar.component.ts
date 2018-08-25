import {Component, OnInit} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'est-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  collapsed = true;

  constructor(private router: Router) {
    router.events.filter((event: Event) => event instanceof NavigationEnd).subscribe(() => setTimeout(() => this.collapsed = true, 500));
  }

  ngOnInit() {
  }

  toggleNav = () => {
    this.collapsed = !this.collapsed;
  };

}
