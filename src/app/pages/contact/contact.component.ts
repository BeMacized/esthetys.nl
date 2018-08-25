import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'est-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient, private notifications: NotificationsService) {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.http.post('https://formspree.io/info@esthetys.nl', form.value, {headers: new HttpHeaders().set('Accept', 'application/json')})
      .subscribe(
        success => {
          form.reset();
          this.notifications.success('Verzonden', 'Uw bericht is verzonden!');
          console.log(success);
        },
        error => {
          this.notifications.error('Oeps...', 'Er is iets mis gegaan! Probeer het later nog een keer.');
          console.error(error);
        }
      );
  }

}
