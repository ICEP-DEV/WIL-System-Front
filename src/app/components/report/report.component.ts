import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  tempStudentInform: any;
  tempdata: any;
  myData: any;
  student_no: any = 0;
  studentService: any;

  report_text: any='';

  

  
 
  
  constructor ( private report: StudentService, private router: Router)
    
  {}
  
  // Assuming you have retrieved the student number from an input field or variable
  
  isTextareaEmpty: boolean = false;

  
  ngOnInit(): void {
    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;

    this.data.student_no = this.student_no;
  }


  data = {
    student_no: this.student_no, 
    report_doc: this.report_text,
  };


  
  reportDoc() {
  
 this.data.report_doc = this.report_text;
  console.log(this.data.report_doc);

  if(this.data.report_doc.trim === '')
  {
    this.report.saveReport('/report');
    
  }
  else{
    this.report.saveReport(this.data).subscribe((response: any) => {
      //console.log(this.data.log_description)
    console.log('Post request successful', response);
    
    }) , 
    (error: any ) => {
      console.log('Post request unsuccessful', error);
      
    };
  }  
  
  }
  validateTextarea(redirectTo : string): void {
    if (this.report_text === '') {
      this.isTextareaEmpty = true;
  
    } else {
      this.isTextareaEmpty = false;
      this.reportDoc()
      this.navigateToNextPage(redirectTo)
    }
  }
  navigateToNextPage(redirectTo : string ): void {
    this.router.navigate([redirectTo]);
  
  }

  validateAndRedirect(){

  if(
    !this.report_text
  ){
    alert('All fields are required');
    this.router.navigateByUrl('/Report')
  }else{
    this.myData();
    this.router.navigateByUrl('/report-submit')
  }
  }

}
