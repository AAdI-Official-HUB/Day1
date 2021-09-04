import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public styleExp = "block";
 showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.styleExp="none"
  }
  open(){
    this.styleExp="block"
  }
}
