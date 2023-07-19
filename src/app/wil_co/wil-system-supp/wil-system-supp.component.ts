import { Component } from '@angular/core';


@Component({
  selector: 'app-wil-system-supp',
  templateUrl: './wil-system-supp.component.html',
  styleUrls: ['./wil-system-supp.component.css']
})
export class WilSystemSuppComponent {
  
    student_no: any;
    tempStudentInfo: any;
    query: string = '';
  
    ngOnInit(): void {
      this.tempStudentInfo = localStorage.getItem('user');
      const studInfo = JSON.parse(this.tempStudentInfo);
      this.student_no = studInfo.student_no;
    }
  
    submitQuery(): void {
  
      if (this.query.trim() === '') {
        alert('You cannot send an empty query.');
      } 
      else {
        // Process the query or navigate to the Submit Query page
        const queryMessage = (document.getElementById('queryMessage') as HTMLTextAreaElement).value;
      console.log(queryMessage);
      // Create the data object to be sent in the POST request
      const data = {
        student_no: this.student_no,
        queryMessage,
      };
  
      // Make a POST request to the API endpoint with the evaluation data
      fetch('http://192.168.27.46:8080/api/wilQuery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(result => {
          // Handle the response from the server
          console.log(result);
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error('Error:', error);
        });
    }
      }   
}
