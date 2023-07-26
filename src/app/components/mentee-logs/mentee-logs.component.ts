import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MentorService } from 'src/app/services/mentor.service';
import { DatePipe } from '@angular/common';

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
  progressPercentage: number =0; //placeholder
  evaluatedLogs:any[] = [];
  evaluateStatus: string = 'Not Completed';
  counter:number = 1;
  progress:number=0;
  parsedDate:any= ''
  formattedDate:any= '';


  constructor(private logEntries: MentorService, private route:ActivatedRoute, private datePipe: DatePipe) { }

  
  ngOnInit() {
    //this.getDataFromApi();
    //getting student info

    this.route.params.subscribe(params => {
      this.student_no = params['student_no'];
      this.name = params['surname'];
      this.surname = params['name'];

    console.log(this.surname)
      this.getDataFromApi();
    });


   /* this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;
    this.name = studentInfo.name;
    this.surname = studentInfo.surname;*/

    
  }

  getDataFromApi() {
    this.logEntries.getlogEntries(this.student_no).subscribe(
      (response: any) => {
        this.data = response.result;
        console.log(this.data);
        this.progress = this.data.length;
        this.progressPercentage= (this.progress/6)*100
        console.log(this.progressPercentage)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  sendLogEntries() {
    this.logEntries.sendEntries(this.evaluatedLogs).subscribe((response) => {
      console.log('POST request succesful', response);
    }),
      (error: any) => {
        console.error('POST request unsuccesful', error);
      };
  }

  convertDateFormat(dateTime: string): string {
    this.parsedDate = new Date(dateTime);
    this.formattedDate = this.datePipe.transform(this.parsedDate, 'yyyy-MM-dd HH:mm:ss');
    return this.formattedDate;
  }



}
