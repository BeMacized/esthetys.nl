import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagewidthContainerComponent } from './components/pagewidth-container/pagewidth-container.component';
import { HomeSliderComponent } from './pages/home/home-slider/home-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BehandelingenComponent } from './pages/behandelingen/behandelingen.component';
import { PrijslijstComponent } from './pages/prijslijst/prijslijst.component';
import { CadeaubonComponent } from './pages/cadeaubon/cadeaubon.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CovidOverlayComponent } from './components/covid-overlay/covid-overlay.component';
import { MerkenComponent } from './pages/merken/merken.component';
import { LightboxImageComponent } from './components/lightbox-image/lightbox-image.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LightboxModule } from 'ngx-lightbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PagewidthContainerComponent,
        HomeComponent,
        PageNotFoundComponent,
        HomeSliderComponent,
        FooterComponent,
        LightboxImageComponent,
        BehandelingenComponent,
        MerkenComponent,
        CadeaubonComponent,
        PrijslijstComponent,
        ContactComponent,
        CovidOverlayComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        LightboxModule,
        SimpleNotificationsModule.forRoot(),
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
