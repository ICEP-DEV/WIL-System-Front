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
  students: any[] = [];
  studentInfo: any = {};
  fileName: string = '';
constructor(private route: ActivatedRoute, private adminService: AdminService){
  
}

ngOnInit() {
  this.route.params.subscribe(params => {
    // this.studentNumber = params['studentNumber'];
    this.student_no = params['studentNumber']
    this.getStudentInfo();
    this.getFileName();
    
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

// downloadPlacementLetter(student_no: string, fileName: string) {
//   this.adminService.getPlacementLetter(student_no, fileName).subscribe(
//     (fileResponse) => {
//       const blob = new Blob([fileResponse], { type: 'application/pdf' });
//       const url = window.URL.createObjectURL(blob);
//       window.open(url);
//       URL.revokeObjectURL(url);
//       console.log(fileResponse);
      
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }


getFileName() {
  this.adminService.getStudents(this.student_no).subscribe(
    response => {
      console.log(response);
    
      if (response.success === 1 && response.data.length > 0) {
        this.fileName = response.data[0].fileName;
        console.log('File Name:', this.fileName);
      } else {
        console.log('Record not found');
      }
    },
    error => {
      console.log('Error:', error);
    }
  );
}

downloadPlacementLetter() {
  this.adminService.getPlacementLetter(this.student_no, this.fileName).subscribe(
    (fileResponse) => {
      const blob = new Blob([fileResponse], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = this.fileName;
      a.click();
      URL.revokeObjectURL(url);
    },
    (error) => {
      console.log(error);
    }
  );
}


}
