import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-mentor',
  templateUrl: './update-mentor.component.html',
  styleUrls: ['./update-mentor.component.css']
})
export class UpdateMentorComponent {
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
  mentor_Id:any = '';

  // Email content
  e_subject: string = '';
  e_text: string = '';


  constructor(private mentor: StudentService, private router: Router, private route:ActivatedRoute) {}
  empty_space: boolean = false;

  ngOnInit(): void {
    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;
    this.fromE = studentInfo.email;
    this.name = studentInfo.name;
    this.surname = studentInfo.surname

    this.route.params.subscribe(params => {
      this.mentor_Id = params['mentor_Id'];
      this.title = params['title'];
      this.m_name = params['m_name']
      this.m_surname = params ['m_surname']
      this.mobileNo = params['mobileNo']
      this.email_address = params['email_address'];
      
    });

    
    
    this.student_no = this.student_no;
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
      this.router.navigateByUrl('/update_mentor')
    }else
    {
      this.saveData();
      this.router.navigateByUrl('/mentor-invited')
    }
  }



  saveData() {
    //console.log(this.addData.value); 
    student_no: this.student_no,
    this.addMentor = {
    title: this.title, 
    m_name: this.m_name,
    m_surname:this.m_surname,
    email_address: this.email_address,
    mobileNo: this.mobileNo,
  }
  console.log(this.mentor_Id)
    this.mentor.updateMentor(this.addMentor,this.student_no,this.mentor_Id).subscribe((response) => {
      console.log('patch request succesful', response);
    }),
      (error: any) => {
        console.error('patch request unsuccesful', error);
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
