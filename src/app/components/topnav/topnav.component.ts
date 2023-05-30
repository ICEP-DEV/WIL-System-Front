import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
  constructor(private router: Router) {}
  
  //NAVIGATION PAGES ONCLICK
  navigateToHomePage() {
    this.router.navigate(['/home']);}

 /*myFunction() {
  const x = document.getElementById("myTopnav");
  if (x?.className === "topnav") {
    x.className += " responsive";
  } else if (x) {
    x.className = "topnav";
  }*/

  
}
