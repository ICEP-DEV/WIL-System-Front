import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-addmentor',
  templateUrl: './addmentor.component.html',
  styleUrls: ['./addmentor.component.css']
})
export class AddmentorComponent {
  tempStudentInform: any;
  student_no: any = '';
  m_name: any = ''
  title:any = '';
  m_surname: any = '';
  email_address:any = '';
  mobileNo:any = '';
  suburb:any = '';
  address:any = '';
  mentor_id:any = '';
  constructor(private mentor: StudentService, private router: Router) {}


  ngOnInit(): void {
    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;
    
    this.addMentor.student_no = this.student_no;
  }

  addMentor = {
    student_no: this.student_no,
    title: this.title, 
    m_name: this.m_name,
    m_surname:this.m_surname,
    email_address: this.email_address,
    mobileNo: this.mobileNo,
  
  };

  validateAndRedirect(){
    if(
      !this.title ||
      !this.m_name ||
      !this.m_surname ||
      !this.email_address ||
      !this.mobileNo
    ){
      alert('All fields are required');
      this.router.navigateByUrl('/addmentor')
    }else
    {
      this.saveData();
      this.router.navigateByUrl('/mentor-invited')
    }
  }

  /*addData = new FormGroup({
    title: new FormControl(),
    m_name: new FormControl(),
    m_surname: new FormControl(),
    email_address: new FormControl(),
    mobileNo  : new FormControl(),
  });*/

  saveData() {
    //console.log(this.addData.value); 
    this.addMentor = {
      student_no: this.student_no,
    title: this.title, 
    m_name: this.m_name,
    m_surname:this.m_surname,
    email_address: this.email_address,
    mobileNo: this.mobileNo,
  }
    this.mentor.saveMetorData(this.addMentor).subscribe((response) => {
      console.log('POST request succesful', response);
    }),
      (error: any) => {
        console.error('POST request unsuccesful', error);
      };

    /*this.http.post('https://your-backend-api.com/send-email', { to: 'user@example.com' })
      .subscribe(
        () => {
          console.log('Email sent successfully');
          // Additional success handling logic
        },
        ((error:any) => {
          console.error('Error sending email:', error);

        }),
}*/
  }
}
