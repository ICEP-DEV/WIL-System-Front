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
    doc.text('M Mohlolo student no: 219745369 Is from the department of ', 15, 15);
    doc.text('RE: Work Integrated Learning/Industrial exposure Tshwane University of Technology do uplift the students standards ',15,17)
    doc.text('This effort is intended to give students an opportunity to be exposed to real work situations and environment.',15,19) 
    doc.text('During this period the students who are pursuing a National Diploma Information Communication Technology-Business Applications qualification',15,21) 
    doc.text('need to be exposed to practical projects and work under the direct',19,22) 
    doc.text('supervision of the roles such as',20,25);

    doc.save();
    
  }
}
