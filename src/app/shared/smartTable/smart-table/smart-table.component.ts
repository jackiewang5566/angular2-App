import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {
  @Input('source') private source;
  @Input('settings') private settings;
  constructor() { }

  ngOnInit() {
  }

  onSelectRow(item){
    console.log(item);
  }

}
