import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  admissionInfo: any = {};
  fileName: string = '';
 

constructor(private route: ActivatedRoute, private adminService: AdminService){
  
}

ngOnInit() {
  this.route.params.subscribe(params => {
    // this.studentNumber = params['studentNumber'];
    this.student_no = params['studentNumber']
    this.getStudentInfo();
    this.getFileName();
    this.getReAdmission()

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

getReAdmission() {
  

  this.adminService.getformById(this.student_no).subscribe(
    
    response => {
      console.log('read:', this.student_no);
      console.log(response.data);
      
      this.admissionInfo = response.data[0];
      
     
    },
    error => {
      console.log('Error:', error);
    }
  );
}


isConfirmationModalVisible = false;
  isSecondModalVisible = false;

  // Other component code

  showConfirmationModal() {
    this.isConfirmationModalVisible = true;
  }

  cancelConfirmationModal() {
    this.isConfirmationModalVisible = false;
  }
  approveApplication() {
    const data = {
      student_no: this.student_no,
      app_status: 'accepted',
      comment: 'Application accepted'
    };
  
    this.adminService.getApprove(data).subscribe(
      response => {
        console.log(response);
        // Handle success response
        this.isConfirmationModalVisible = false; // Hide the confirmation modal
        this.isSecondModalVisible = true; // Show the second modal
  
      },
      error => {
        console.log(error);
        // Handle error response
      }
    );
  }
  

  closeSecondModal() {
    this.isSecondModalVisible = false;
  }



rejectApplication() {
  const data = {
    student_no: this.student_no,
    app_status: 'rejected',
    comment: 'Application rejected'
  };

  this.adminService.getApprove(data).subscribe(
    response => {
      console.log(response);
      // Handle success response
    },
    error => {
      console.log(error);
      // Handle error response
    }
  );
}




}
