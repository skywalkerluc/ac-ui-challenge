import { Component } from '@angular/core';
const url = 'http://freegeoip.net/json/'

@Component({
    moduleId: module.id,
    selector: 'website-location',
    templateUrl: 'website-location.component.html',
    styleUrls: ['website-location.component.css']
})
export class WebsiteLocationComponent {
    loadAPI: Promise<any>;
}