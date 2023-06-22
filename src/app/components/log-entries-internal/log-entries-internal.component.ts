import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-log-entries-internal',
  templateUrl: './log-entries-internal.component.html',
  styleUrls: ['./log-entries-internal.component.css']
})
export class LogEntriesInternalComponent {
  private url ='http://192.168.27.52:8080/api/logbook';
  logbook_id: any ='';
  tempStudentInform: any;
  tempdata: any;
  myData: any;
  student_no: any = 0;
  studentService: any;
  mentor_id: any ='';

  log_description: any='';
  log_status: any='';

  //displayEntry: any ='';

  
 
  
  constructor ( private logentries: StudentService, private router: Router)
    
  {}
  
  // Assuming you have retrieved the student number from an input field or variable
  
  isTextareaEmpty: boolean = false;

  
  ngOnInit(): void {
    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;

    this.data.student_no = this.student_no;
  }

   currentDate = new Date(); // Create a new Date object with the current date and time

year = this.currentDate.getFullYear(); // Get the current year (e.g., 2023)
 month = this.currentDate.getMonth() + 1; // Get the current month (0-11, so add 1 to get 1-12)
 day = this.currentDate.getDate(); // Get the current day of the month (1-31)

 formattedDate = `${this.year}-${this.month}-${this.day}`; // Format the date as desired (e.g., "2023-06-15")

  
  
  
  //getEntries(){
    //console.log(this.displayEntry);
 // }

 

  data = {
    student_no: this.student_no, 
    mentor_id: this.mentor_id,
    date: this.formattedDate,
    log_description: this.log_description
    
  };


  
  logEntries() {

 // console.log(this.data.student_no)
 // console.log(this.data.log_description)
  
 this.data.log_description = this.log_description;
  console.log(this.data.log_description);

  if(this.data.log_description.trim === '')
  {
    //if this textare is empty redirect to the internal log-entries
    this.logentries.entries('/log-entries-internal',);
    
  }
  else{
    this.logentries.entries(this.data).subscribe((response: any) => {
      //console.log(this.data.log_description)
    console.log('Post request successful', response);
    
    }) , 
    (error: any ) => {
      console.log('Post request unsuccessful', error);
      
    };
  }  
  


  }
  validateTextarea(redirectTo : string): void {
    if (this.log_description === '') {
      this.isTextareaEmpty = true;
  
    } else {
      this.isTextareaEmpty = false;
      this.logEntries()
      this.navigateToNextPage(redirectTo)
    }
  }
  navigateToNextPage(redirectTo : string ): void {
    this.router.navigate([redirectTo]);
  
  }


}