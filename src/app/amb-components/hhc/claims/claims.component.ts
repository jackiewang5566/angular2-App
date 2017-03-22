import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {
  public panelHeader: string = 'panelHeader';
  public source;
  public settings;

  constructor() {

  }

  ngOnInit() {
    this.settings = {
      columns: {
        id: {
          title: 'ID'
        },
        name: {
          title: 'Full Name'
        },
        username: {
          title: 'User Name'
        },
        email: {
          title: 'Email'
        }
      },
      editable:false,
      filter:false,
      sort:true,
      sortDirection:'asc',
      actions:{
        add:false,
        edit:false,
        delete:false
      }
    };

    this.source = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },

      // ... list of items

      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      }
    ];
  }

}
