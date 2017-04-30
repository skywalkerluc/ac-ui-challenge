import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyLocationComponent } from './components/my-location/my-location.component';
import { WebsiteLocationComponent } from './components/website-location/website-location.component';
import { AgmCoreModule } from 'angular-google-maps'

import {routing} from './app.routing';

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [AppComponent, MyLocationComponent, WebsiteLocationComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }