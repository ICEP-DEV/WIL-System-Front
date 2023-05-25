import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent {
  myFunction(): void {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  myFunctionB(): void {
    const dropdown = document.getElementById("myDropdown2");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  myFunctionC(): void {
    const dropdown = document.getElementById("myDropdown3");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  myFunctionD(): void {
    const dropdown = document.getElementById("myDropdown4");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  myFunctionE(): void {
    const dropdown = document.getElementById("myDropdown5");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  myFunctionF(): void {
    const dropdown = document.getElementById("myDropdown6");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  myFunctionG(): void {
    const dropdown = document.getElementById("myDropdown7");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  myFunctionH(): void {
    const dropdown = document.getElementById("myDropdown8");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  myFunctionI(): void {
    const dropdown = document.getElementById("myDropdown9");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  myFunctionJ(): void {
    const dropdown = document.getElementById("myDropdown10");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }

  click = function(event: MouseEvent): void {
    if (!(event.target instanceof HTMLElement) || !event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown instanceof HTMLElement && openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  

}



// Close the dropdown if the user clicks outside of it
