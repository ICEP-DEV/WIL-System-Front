import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-support',
  templateUrl: './registrar-support.component.html',
  styleUrls: ['./registrar-support.component.css'],
})
export class RegistrarSupportComponent {
  registrar_no: number = 112233;
  tempRegistrarInfo: any;
  query: string = '';
  empty_text: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.tempRegistrarInfo = localStorage.getItem('user');
    const studInfo = JSON.parse(this.tempRegistrarInfo);
    //this.registrar_no = studInfo.student_no;
    console.log(this.registrar_no);
  }

  submitQuery(): void {
    if (this.query.trim() === '') {
      this.empty_text = true;
      //alert('You cannot send an empty query.');
    } else {
      // Process the query or navigate to the Submit Query page
      const queryMessage = (
        document.getElementById('queryMessage') as HTMLTextAreaElement
      ).value;
      console.log(queryMessage);
      // Create the data object to be sent in the POST request
      const data = {
        registrar_no: this.registrar_no,
        queryMessage,
      };

      // Make a POST request to the API endpoint with the evaluation data
      fetch('http://localhost:8080/api/regQuery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          // Handle the response from the server
          console.log(result);
          this.router.navigateByUrl('/registrar-save');
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error('Error:', error);
        });
    }
  }
}
