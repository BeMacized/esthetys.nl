import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LightboxModule} from 'ngx-lightbox';


import {AppComponent} from './components/app/app.component';
import {PagewidthContainerComponent} from './components/pagewidth-container/pagewidth-container.component';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HomeSliderComponent} from './pages/home/home-slider/home-slider.component';
import {FooterComponent} from './components/footer/footer.component';
import {LightboxImageComponent} from './components/lightbox-image/lightbox-image.component';
import {BehandelingenComponent} from './pages/behandelingen/behandelingen.component';
import {ProduktenComponent} from './pages/produkten/produkten.component';
import {CadeaubonComponent} from './pages/cadeaubon/cadeaubon.component';
import {PrijslijstComponent} from './pages/prijslijst/prijslijst.component';
import {ContactComponent} from './pages/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'behandelingen', component: BehandelingenComponent},
  {path: 'produkten', component: ProduktenComponent},
  {path: 'cadeaubon', component: CadeaubonComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'prijslijst', component: PrijslijstComponent},
  {path: '**', component: PageNotFoundComponent}
];

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
    ProduktenComponent,
    CadeaubonComponent,
    PrijslijstComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {}),
    BrowserModule,
    FlexLayoutModule,
    NgbModule,
    LightboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
