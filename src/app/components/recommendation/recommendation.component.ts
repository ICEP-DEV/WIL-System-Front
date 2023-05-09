import { Component } from '@angular/core';
import {jsPDF} from 'jspdf'
// import html2canvas from 'html2canvas';
//import {html2pdf} from 'html2pdf.js';

import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})

export class RecommendationComponent {

  // private element! : HTMLElement 
  studentInfo: any;
  tempStudentInfo:any
  studentNo= 0
  
  surname: string | undefined;
  constructor(private service:StudentService) { 
   // this.element = document.getElementById('my-element')!;
  }
  ngOnInit(): void {
    this.tempStudentInfo = localStorage.getItem('user')
    var studInfo = JSON.parse((this.tempStudentInfo))
    this.studentNo = studInfo.student_no
  }

  tempInfo:any
  recLetter() {
    this.service.recLetter(this.studentNo)
    .subscribe((data) =>{
      console.log('data',data);
      this.tempInfo=data
      this.studentInfo = this.tempInfo.data[0];
      this.surname = JSON.stringify(this.studentInfo.surname)
    },(err)=>{
      console.log(err)
    })



    
    console.log('Downloading PDF ...');
    const doc = new jsPDF();
    const x = 10;
    const y = 10;
    const width = 50;
    const height = 50;
    doc.setFontSize(14)
    doc.setFont('sans-serif')

   //this.downloadAsPDF();
    //doc.addImage('src\assets\LogoTut.png', 'PNG', x, y, width, height);
    doc.text('Faculty of Information and Communication Technology \n\n',70,10)
    doc.text('TO WHOM IT MAY CONCERN Dear Sir/Madam,\n\n',70,15)
    doc.text('May 2022',10,20)
    doc.text(`${this.tempInfo.data[0].surname}`,10,25)

    doc.text('RE: Work Intergrated Learning or Industrial Exposure',10,30)
    doc.text(`The letter certify that ${this.tempInfo.data[0].surname}  ${this.tempInfo.data[0].initials} (student number ${this.tempInfo.data[0].student_no}) is a potential`,10,45)
    doc.text('graduate for National Diploma in IT: Software Development from the Tshwane University',10,50)
    doc.text('of Technology.',10,55)
    doc.text('',10,60)
    doc.text('It is my pleasure to recommend surname and initials for a work integrated learning',10,65)
    doc.text('exposure as it is a requirement for the student to complete the diploma',10,70)
    doc.text('',10,75)
    doc.text('The major fileds of study in this diploma are:',10,80)
    doc.text(`*  ${this.tempInfo.data[0].roles} `,10,85)
    doc.text('* Mobile Development',10,90)
    doc.text(`*  ${this.tempInfo.data[0].roles} `,10,95)
    doc.text('* Software Testing',10,100)
    doc.text('* Database Development and Administration',10,105)
    doc.text('',10,110)
    doc.text('For the experiential training to add value to the student, we suggest that the students be ',10,115)
    doc.text('assigned tasks and responsiblities that are aligned to the field of study. it is to be noted',10,120)
    doc.text('that the above mentioned fields of studies are only a guideline in this regard, any other',10,125)
    doc.text('information Technology(IT) oriented projects and task may also be accepted.',10,130)
    doc.text('The duration of the industry exposure should be a minimum of 6 months.',10,135)
    doc.text('',10,140)
    doc.text('The student has consistently demostrated an ability to rise to any xhallenges that she',10,145)
    doc.text('may face in her academic studies or any other endeavour.',10,150)
    doc.text('',10,155)
    doc.text('In conclusion, I would like to',10,160)
    doc.text('state my strong recommendation for surname and initials you have any further',10,165)
    doc.text('questions regarding his ability or this recommendation, please do not hesitate to',10,170)
    doc.text('contact me using the information on this letter head.',10,175)
    doc.text('',10,180)
    doc.text('',10,185)
    doc.text('',10,190)
    doc.text('Your co-operation is highly valued',10,195)
    doc.text('',10,200)
    doc.text('_________________________\n\n',10,205)
    doc.text('Mr N.F Smith',10,210)
    doc.text('WIL Admin',10,215)
    doc.text('Email :  smith@tut.ac.za',10,220)
    doc.text('Tel: 012 621 9997',10,225)
    doc.save('Recommendation Letter');
  }


  getStudentInfoByID(student_no: any){
    this.service.recLetter(student_no)
    .subscribe((data: any) =>{
      console.log('data',data);
      this.studentInfo = this.studentInfo.data;
     


      
    });
  }

  // downloadAsPDF() {
  //   html2canvas(this.element).then((canvas) => {
  //     const doc = new jsPDF();
  //     const x = 10;
  //     const y = 10;
  //     const width = 50;
  //     const height = 50;
  //     doc.addImage(canvas.toDataURL('./assets/tutlogo.png'), 'PNG', x, y, width, height);
  //     doc.save('download.pdf');
  //   }).catch((error) => {
  //     console.log('Error:', error);
  //   });
  // }
  


}