import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {

  studentInfo: any;
  tempInfo: any
  tempStudentInfo: any
  studentNo: any
  constructor(private studentService:StudentService) {}

  ngOnInit(): void {

    this.tempStudentInfo = localStorage.getItem('user')

    var studInfo = JSON.parse((this.tempStudentInfo))
    this.studentNo = studInfo.student_no
     console.log(this.studentNo);


     this.studentService.getOpen(this.studentNo).subscribe((response: any) => {
      //console.log(this.data.log_description)
    console.log('Post request successful', response);
    
    }) , 
    (error: any ) => {
      console.log('Post request unsuccessful', error);
      
    };
  }

 
}
