import { Component } from '@angular/core';
import { RegistrarService } from 'src/app/services/registrar.service';

@Component({
  selector: 'app-registrar-applicants',
  templateUrl: './registrar-applicants.component.html',
  styleUrls: ['./registrar-applicants.component.css']
})
export class RegistrarApplicantsComponent {
  studentNumbers: string[] = [];

  constructor(public registrarService: RegistrarService){}

  ngOnInit() {
    this.getStudentNumbers();
  }

  getStudentNumbers() {
    const data = ''; // Pass any required data here
    this.registrarService.getwillInfo(data).subscribe(
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
