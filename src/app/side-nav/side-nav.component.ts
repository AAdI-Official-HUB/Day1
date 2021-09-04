import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
 showFiller = false;
 //styleExp="400px";
 
 
  constructor() { }

  ngOnInit(): void {
  }
  //close(){this.styleExp="0px"}
 // open(){this.styleExp="10px"}
}
