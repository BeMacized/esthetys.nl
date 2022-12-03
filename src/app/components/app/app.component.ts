import { Component, OnInit } from '@angular/core';
import { DomService } from '../../services/dom.service';
import { CovidOverlayComponent } from '../covid-overlay/covid-overlay.component';

@Component({
    selector: 'est-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    notificationOptions = {
        position: ['top', 'center'],
        timeOut: 3000,
        animate: 'fromTop',
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
