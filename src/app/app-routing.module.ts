import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BehandelingenComponent } from './pages/behandelingen/behandelingen.component';
import { MerkenComponent } from './pages/merken/merken.component';
import { CadeaubonComponent } from './pages/cadeaubon/cadeaubon.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrijslijstComponent } from './pages/prijslijst/prijslijst.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'behandelingen', component: BehandelingenComponent },
    { path: 'merken', component: MerkenComponent },
    { path: 'cadeaubon', component: CadeaubonComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'prijslijst', component: PrijslijstComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
