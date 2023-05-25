import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {

}

function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x?.className === "topnav") {
    x.className += " responsive";
  } else if (x) {
    x.className = "topnav";
  }
}
