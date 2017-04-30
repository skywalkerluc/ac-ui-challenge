"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var my_location_component_1 = require("./components/my-location/my-location.component");
var website_location_component_1 = require("./components/website-location/website-location.component");
var appRoutes = [
    {
        path: '',
        component: my_location_component_1.MyLocationComponent
    },
    {
        path: 'website-location',
        component: website_location_component_1.WebsiteLocationComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map