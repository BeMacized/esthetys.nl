import { Component, OnInit } from '@angular/core';
import { DomService } from '../../services/dom.service';
import { Options } from 'angular2-notifications';
import { NotificationAnimationType } from 'angular2-notifications';

@Component({
    selector: 'est-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
    notificationOptions: Options = {
        position: ['top', 'center'],
        timeOut: 3000,
        animate: NotificationAnimationType.FromTop,
    };

    constructor(private domService: DomService) {}

    ngOnInit() {
        // const component = this.domService.appendComponentTo<CovidOverlayComponent>(
        //     'overlay-container',
        //     CovidOverlayComponent,
        //     {
        //         close: () => component.remove(),
        //     }
        // );
    }
}
