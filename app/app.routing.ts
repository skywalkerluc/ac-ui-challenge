import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLocationComponent } from './components/my-location/my-location.component';
import { WebsiteLocationComponent } from './components/website-location/website-location.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MyLocationComponent
    },
    {
        path: 'website-location',
        component: WebsiteLocationComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);