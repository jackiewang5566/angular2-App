import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { CorresponseComponent } from './corresponse/corresponse.component';
import { AmbComponentsComponent } from './amb-components/amb-components.component';
import { HhcComponent } from './amb-components/hhc/hhc.component';
import { ClaimsComponent } from './amb-components/hhc/claims/claims.component';
import { AuthComponent } from './amb-components/hhc/auth/auth.component';
import { BpaComponent } from './amb-components/hhc/bpa/bpa.component';
import { routing } from './app.routing';
import { DmeComponent } from './amb-components/dme/dme.component';
import { TravelComponent } from './amb-components/travel/travel.component';
import { TransplatsComponent } from './amb-components/transplats/transplats.component';
import { AccordionModule } from 'ng2-bootstrap';
import { SmartTableComponent } from './shared/smartTable/smart-table/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    AppComponent,
    CorresponseComponent,
    AmbComponentsComponent,
    HhcComponent,
    ClaimsComponent,
    AuthComponent,
    BpaComponent,
    DmeComponent,
    TravelComponent,
    TransplatsComponent,
    SmartTableComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    Ng2SmartTableModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
