import {Router, RouterModule} from '@angular/router';
import {CorresponseComponent} from './corresponse/corresponse.component';
import {AmbComponentsComponent} from './amb-components/amb-components.component';
import {HhcComponent} from './amb-components/hhc/hhc.component';
import {ClaimsComponent} from './amb-components/hhc/claims/claims.component';
import {AuthComponent} from './amb-components/hhc/auth/auth.component';
import {BpaComponent} from './amb-components/hhc/bpa/bpa.component';
import {TransplatsComponent} from './amb-components/transplats/transplats.component';
import {TravelComponent} from './amb-components/travel/travel.component';
import {DmeComponent} from './amb-components/dme/dme.component';

export const routing = RouterModule.forRoot([
    {path:'amb', component:AmbComponentsComponent,
     children:[
        {path:'hhc', component:HhcComponent,
            children:[
                 {path:'claims', component:ClaimsComponent},
                 {path:'auth', component:AuthComponent},
                 {path:'bpa', component:BpaComponent},
                 {path:'**', component:ClaimsComponent}

            ]},
        {path:'dme', component:DmeComponent},
        {path:'travel', component:TravelComponent},
        {path:'transplats', component:TransplatsComponent}
        ]},
    {path:'corresponse', component:CorresponseComponent},
    {path:'**', component:AmbComponentsComponent}

])
