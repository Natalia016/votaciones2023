import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-home-gestion',
  templateUrl: './home-gestion.component.html',
  styleUrls: ['./home-gestion.component.css']
})
export class HomeGestionComponent {
  isSideNavCollapsed = true;
  screenWidth = 0;
  
  onToggleSideNav(data:SideNavToggle):void{
  this.screenWidth = data.screenWidth;
  this.isSideNavCollapsed =data.collapsed;
  }
}
