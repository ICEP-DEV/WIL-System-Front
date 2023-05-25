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
  tempInfo:any
  tempStudentInfo:any
  studentNo= 0
  imgData = 'data:image/gif;base64,R0lGODlh9QA8APcAAMHV5erx9nmjxv3WdRlinuUpRepZbrXM4O3y9/3KTfP3+v7ek7rQ4vzm6f/67f/13va1v/7twsTX5+9/j/76+v7inrLK3vCJmCVqo3SgxB5moGWWvupVa+Tt9HCdw5W30mCSvPy5FjZ2qkJ+r+xkeEaBsfy6GuhGXf/24eHr8vzALf7kpeQhPtLg7Jm51Dx6rfve4vWuubjO4YGpyqnE2+95iv/+/fy8IShspPSqtNjl78bY5+YyTP3Zgf3YfSFnoa/I3Rdhne5yhP/9/f/9+f/89f/78f7ux3+nycvb6W6cwuQmQhFcmqPA2PzBMi1vpkF9rw9bmWOUvV2Quvy4E97p8b3S44yxziptpWuawZ281e/0+EuEs63H3Dp5rOlJYfKVo/3x8+UrRluPunylyOc6U87d6v3w8u53iPnS1/vh5fjCyvCGlfSksOxoe/azvfD0+OY4UfjGzfObqGiYv/r8/f7+//a4wf3Saytupe7z+FOKtvz9/vn7/fX4+/b5+y9xpxNem/72942xz/3+/vT4+wxZmOjv9fv8/TN0qf///lGItj98rp+91mybwSZro/74+RVfnP7x0KTB2aXC2fj6/Nbj7kyEs/zDNhtknzFyqBRem/73+PWst7DJ3v7vy/3QZM/e68zc6c3d6hxkn/3FPtfk7n2myPOfq7TM38na6FWLt1mOuRJdm7zS4/H2+f7y1FCItVKJtu1pffe8xff6/NXi7TR1qeY3UJO10Q1amfrV2//45yJooomvzY6yz/7z9eQoQ+UsR02GtP77+/3Ub4uwzutbcP7pt/H1+exjdzBxp5i506C+1/y7HP3OXP3HRPKSoP7gl1qOuf7ci+bu9GqawP7mrva3wPzj5//35fSlsfSjr/3TbkqDsr7T5Oc/V/fCyYSry+UtSP75+v3v8fnN1KfD2vSmsf3bhv3IStvn8PrY3fy8H/KWo/CBkqvG3IWszPy+KP7nsAtYmNTh7fKUov3SaDV1qsjZ6PzDOZy71f7joeMcOQlXl////yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNzYwMEQ3OENDNUMxMUU4OTA0RkY4NjZEQTQ5OUNEOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzYwMEQ3N0NDNUMxMUU4OTA0RkY4NjZEQTQ5OUNEOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MEEzQzIyRDc5NDAxMUU4ODg2RUNENTY0M0QzMzk5MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MEEzQzIyRTc5NDAxMUU4ODg2RUNENTY0M0QzMzk5MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUk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'
    
  
  /////DATE/////////
  currentDate = new Date() 
  day = this.currentDate.getDate();
  monthIndex = this.currentDate.getMonth();
  yearZ = this.currentDate.getFullYear()
  monthNames = ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  dateString = `${this.day} ${this.monthNames[this.monthIndex]} ${this.yearZ}`;
  

  //////////STAMP///////
  // Define the stamp position and size
// stampX = 10;
// stampY = 10;
// stampWidth = 100;
// stampHeight = 50;

// Get the current date
scurrentDate = new Date();
formattedDate = `${this.scurrentDate.getDate()}/${this.scurrentDate.toLocaleString('default', { month: 'short' })}/${this.scurrentDate.getFullYear()}`;


  
    surname: string | undefined;
  constructor(private service:StudentService) { 
   // this.element = document.getElementById('my-element')!;
  }
  ngOnInit(): void {
    this.tempStudentInfo = localStorage.getItem('user')

    var studInfo = JSON.parse((this.tempStudentInfo))
    this.studentNo = studInfo.student_no
  }

  
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
    doc.addImage(this.imgData, 'JPEG', 10,5, 75, 47);
    doc.setFontSize(18)
    doc.text('Faculty of :\nInformation and Communication Technology \n\n',80,20);
    doc.setFontSize(14)
    doc.text(this.dateString,10,55)
   

   doc.text('RE: Work Intergrated Learning or Industrial Exposure',10,65)
   doc.text('TO WHOM IT MAY CONCERN Dear Sir/Madam,',10,75)
   doc.text(`The letter certify that ${this.tempInfo.data[0].surname}  ${this.tempInfo.data[0].initials} (student number ${this.tempInfo.data[0].student_no}) is a potential`,10,85)
  doc.text('graduate for National Diploma in IT: Software Development from the Tshwane University',10,90)
   doc.text('of Technology.',10,95)
    doc.text('',10,95)
    doc.text('It is my pleasure to recommend surname and initials for a work integrated learning',10,100)
    doc.text('exposure as it is a requirement for the student to complete the diploma',10,105)
    doc.text('',10,110)
    doc.text('The major fileds of study in this diploma are:',10,115)
    doc.text(`*  ${this.tempInfo.data[0].roles} `,10,120)
    doc.text('* Mobile Development',10,125)
    doc.text(`*  ${this.tempInfo.data[1].roles} `,10,130)
    doc.text('* Software Testing',10,135)
    //doc.text('* Database Development and Administration',10,130)
    doc.text('',10,135)
    doc.text('For the experiential training to add value to the student, we suggest that the students be ',10,140)
    doc.text('assigned tasks and responsiblities that are aligned to the field of study. it is to be noted',10,145)
    doc.text('that the above mentioned fields of studies are only a guideline in this regard, any other',10,150)
    doc.text('information Technology(IT) oriented projects and task may also be accepted.',10,155)
    doc.text('The duration of the industry exposure should be a minimum of 6 months.',10,160)
    doc.text('',10,165)
    doc.text('The student has consistently demostrated an ability to rise to any xhallenges that she',10,170)
    // doc.text('may face in her academic studies or any other endeavour.',10,150)
    // doc.text('',10,155)
    // doc.text('In conclusion, I would like to',10,160)
    // doc.text('state my strong recommendation for surname and initials you have any further',10,165)
    // doc.text('questions regarding his ability or this recommendation, please do not hesitate to',10,170)
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

    doc.setDrawColor(0); // Set the border color of the stamp to black
 doc.rect(95, 190, 90, 70, 'D'); // Draw the stamp border
 doc.addImage(this.imgData, 'PNG', 100, 195, 70, 40); // Replace with the path to your logo image

 doc.setFontSize(14);
 doc.setTextColor(0); // Set the text color of the stamp
doc.text(this.formattedDate,  100+ (70/2)-(doc.getTextWidth(this.formattedDate)/2), 190 + 50); // Add the dynamic date to the stamp
doc.setFontSize(16);
doc.text(` Department: ${this.tempInfo.data[0].dep_name}\n Faculty: ICT`,100,250)


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