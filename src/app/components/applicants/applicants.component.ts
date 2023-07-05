import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  studentNumbers: string[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getStudentNumbers();
  }

  // getStudentNumbers() {
  //   const data = ''; // Pass any required data here
  //   this.adminService.willInfo(data).subscribe(
  //     response => {
  //       if (response.result && Array.isArray(response.result)) {
  //         const studentSet = new Set<string>(); // Use a Set to store unique student numbers
  //         response.result.forEach((item: any) => {
  //           studentSet.add(item.student_no); // Add each student number to the Set
  //         });
  //         this.studentNumbers = Array.from(studentSet); // Convert the Set back to an array
  //       } else {
  //         console.error('Invalid response format:', response);
  //       }
  //     },
  //     error => {
  //       console.log('Error:', error);
  //     }
  //   );
  // }

  getStudentNumbers() {
    const data = ''; // Pass any required data here
    this.adminService.willInfo(data).subscribe(
      response => {
        if (response.success === 1 && Array.isArray(response.data)) {
          const studentSet = new Set<string>(); // Use a Set to store unique student numbers
          response.data.forEach((item: any) => {
            studentSet.add(item.student_no); // Add each student number to the Set
          });
          this.studentNumbers = Array.from(studentSet); // Convert the Set back to an array
        } else {
          console.error('Invalid response format:', response);
        }
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
  

}
