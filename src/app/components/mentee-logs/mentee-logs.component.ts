import { Component } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-mentee-logs',
  templateUrl: './mentee-logs.component.html',
  styleUrls: ['./mentee-logs.component.css']
})
export class MenteeLogsComponent {

  tempStudentInform: any;
  student_no: any = '';
  name:any='';
  surname:any='';
  data: any[] = [];
  progressPercentage: number =50; //placeholder

  constructor(private logEntries: MentorService) { }

  
  ngOnInit() {
    this.getDataFromApi();

    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;
    this.name = studentInfo.name;
    this.surname = studentInfo.surname;

    
  }

  getDataFromApi() {
    this.logEntries.getData().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }



}
