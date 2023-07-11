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
  fromE:any = '';
  name: any='';
  surname: any = '';

  // Email content
  e_subject: string = '';
  e_text: string = '';


  constructor(private mentor: StudentService, private router: Router) {}


  ngOnInit(): void {
    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;
    this.fromE = studentInfo.email;
    this.name = studentInfo.name;
    this.surname = studentInfo.surname
    
    this.addMentor.student_no = this.student_no;
   //Email content
   this.e_subject ="Invitation by student " + this.student_no + " " + this.surname +" "+ this.name +"." ;
   this.setEText();
    
  }

  setEText(): void {
    this.e_text =
      'Good day! \n\nYou are invited to mentor ' +
      this.surname +
      ' ' +
      this.name +
      ' for their WIL';
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
      this.sendEmaill();
      this.router.navigateByUrl('/mentor-invited')
    }
  }



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

    
  }




sendEmaill() {
  const from = 'Workintergratedlearning@outlook.com';
  const to = this.email_address;
  const subject = this.e_subject;
  const text = this.e_text;

  this.mentor.sendEmail(from, to, subject, text).subscribe(
    () => {
      console.log('Email sent successfully!');
    },
    (error) => {
      console.error('Error sending email:', error);
    }
  );
}
}


