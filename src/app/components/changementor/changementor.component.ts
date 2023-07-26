import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-changementor',
  templateUrl: './changementor.component.html',
  styleUrls: ['./changementor.component.css']
})
export class ChangementorComponent {

  table_data:any[]= [];
  student_no:any = '';
  tempStudentInform:any = '';
  rowCount:number = 0;

  constructor(private mentor: StudentService) {}

  ngOnInit(): void {
    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;
    this.getDataFromApi();
    
  }


  getDataFromApi() {
    this.mentor.getMentors(this.student_no).subscribe(
      response => {
        this.table_data = response.result;
        this.rowCount = this.table_data.length;
        console.log(this.table_data)
        
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
