import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
 
  studentNumber: string = '';
  student_no: string = ''
  studentInfo: any = {};
constructor(private route: ActivatedRoute, private adminService: AdminService){
  
}

ngOnInit() {
  this.route.params.subscribe(params => {
    // this.studentNumber = params['studentNumber'];
    this.student_no = params['studentNumber']
    this.getStudentInfo();
  });
}

getStudentInfo() {
  console.log('Student Number:', this.student_no);

  this.adminService.getwillInfoById(this.student_no).subscribe(
    response => {
      console.log(response.data);
      
      this.studentInfo = response.data[0];
      
      
    },
    error => {
      console.log('Error:', error);
    }
  );
}

}
