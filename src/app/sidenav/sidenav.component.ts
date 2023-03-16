import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import  { jsPDF }  from 'jspdf';
 



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
 
  recLetter() {
    
    console.log('Downloading PDF ...');
    const doc = new jsPDF();
    
    doc.setFontSize(12)
    
    doc.text('Faculty of Information and Communication Technology \n\n',60,10)
    doc.text('_______________________________________________,\n\n',70,12.5)
    doc.text('TO WHOM IT MAY CONCERN Dear Sir/Madam,\n\n',60,15)
    
    doc.text('May 2022',10,20)
    doc.text('RE: Work Integrated Learning/Industrial exposure Tshwane University of Technology do uplift the \n  ',10,25)
    doc.text('students standards. This effort is intended to give students an opportunity to be exposed to real work \n',10,30) 
    doc.text('situations and environment. During this period the students who are pursuing a National Diploma \n ',10,35) 
    doc.text('Information Communication Technology-Business Applications qualification need to be exposed to \n ',10,40) 
    doc.text('practical projects and work under the direct supervision of the roles such as: \n\n',10,45);
    doc.text('1. Business Analysts',20,50)
    doc.text('2. Systems Analysts',80,50)
    doc.text('3. Systems Testers',20,55)
    doc.text('4. Project managers',80,55,) 
    doc.text('5.  Database administrator\n\n',20,60,) 
    doc.text('to gain practical experience and add value to the organization in which they are placed. The students ',10,65,) 
    doc.text('require a compulsory training for at least six (6) months in the company to complete their national \n',10,70)
    doc.text('diploma qualification. Students require further training to enhance and sharpen their expertise and \n',10,75)
    doc.text(' knowledge learnt in class. It is with pleasure to note that your involvement with their training would \n',10,80)
    doc.text('give them a chance to achieve this objective and to add value to your organization. The risks associated\n',10,85)
    doc.text(' with hiring new staff are minimized when employing a person whom is not only known but also \n',10,90)
    doc.text('tried and proven.Personal development and motivation are enhanced, leading to improved academic \n',10,95)
    doc.text('performance. Our coupled efforts will provide access to staff and facilities of a large education \n',10,100)
    doc.text('institution, and enables employers to become actively involved in the education process. Remuneration \n',10,105)
    doc.text('arrangements are entirely between the student and the organization. References of organizations that\n',10,110)
    doc.text('are part of our Industry Exposure Program are available on request.\n',10,115)
  
    doc.text('Student No: 220163415',10,120)
    doc.text('Student Surname and Initials: Mohlolo, M.J.',10,125)
    doc.text('ID Number: 1903085822086',10,130)
    doc.text('National Diploma: Information Communication Technology-Business Applications',10,135)
    doc.text('',10,140)
    doc.text('Your co-operation is highly valued.',10,145)

    doc.text('_________________________\n\n',10,155)

    doc.save('Recommendation Letter');
    
  }

}

export const navbardata = [
  
    
]
