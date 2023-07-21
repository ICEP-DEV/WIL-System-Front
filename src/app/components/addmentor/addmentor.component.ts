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
  empty_space: boolean = false;

  ngOnInit(): void {
    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;
    this.fromE = studentInfo.email;
    this.name = studentInfo.name;
    this.surname = studentInfo.surname
    
    this.addMentor.student_no = this.student_no;
   //Email content
   this.e_subject ="Invitation to Verify Intern's Log Books on LIFE AS AN INTERN Platform" ;
   this.setEText();
    
  }

  setEText(): void {
    this.e_text =
      `Dear${this.m_name}, \n\nWe hope this message finds you well. We are delighted to inform you that your assigned intern, ${this.surname} ${this.name}, has invited you to join the LIFE AS AN INTERN platform as their mentor.\n\n
      LIFE AS AN INTERN is our state-of-the-art platform designed to streamline the work-integrated learning experience. As a mentor, you will have access to a dedicated section where you can easily verify and provide feedback on your mentee's log books.\n\n
      By logging into the platform, you will be able to review the tasks accomplished, skills developed, challenges faced, and insights gained by your intern during their internship. This valuable information will assist in evaluating their progress and providing valuable guidance.\n\n
      To get started, please follow these simple steps:\n\n
      Visit the LIFE AS AN INTERN platform at [platform URL].\n
      Log in using the provided credentials or create a new account if you haven't already.\n
      Navigate to the "My Interns" section in your dashboard.\n
      Select your mentee, [Intern's Name], to access their log books.\n
      Review and verify their entries by providing your valuable feedback and guidance.\n
      We encourage you to actively engage with your intern through the platform to foster a meaningful and productive mentoring relationship. Should you have any questions or need assistance, our support team is readily available to help you.\n\n
      Thank you for your dedication and commitment to the success of our work-integrated learning program. Your mentorship plays a vital role in shaping the future of our students.\n\n
      Best regards,
      WIL ENVIRONMENT`
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
      this.empty_space = true;
      //alert('All fields are required');
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


