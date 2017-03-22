import { Component, OnInit ,ChangeDetectionStrategy} from '@angular/core';
import { Router} from '@angular/router';
import { AppService } from './../app.service';

@Component({
  selector: 'app-amb-components',
  templateUrl: './amb-components.component.html',
  styleUrls: ['./amb-components.component.css'],
  providers:[AppService],
})
export class AmbComponentsComponent implements OnInit {
  tabs;
  constructor(private AppService:AppService, private router:Router) {
    this.tabs = AppService.getTab();
   }

  ngOnInit() {
    
  }

  goToRoute(tab){
    console.log(tab.route);
    tab.active = true;
   this.router.navigateByUrl(tab.route);
  }
/*  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
    console.log(this.tabs[index].route);
    this.router.navigateByUrl(this.tabs[index].route);
  }*/

}
