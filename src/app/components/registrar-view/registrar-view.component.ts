import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrarService } from 'src/app/services/registrar.service';

@Component({
  selector: 'app-registrar-view',
  templateUrl: './registrar-view.component.html',
  styleUrls: ['./registrar-view.component.css']
})
export class RegistrarViewComponent {

  studentNumber: string = '';
  student_no: string = ''
  students: any[] = [];
  studentInfo: any = {};
  admissionInfo: any = {};
  fileName: string = '';
 

constructor(private route: ActivatedRoute, private registrarService: RegistrarService){
  
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

  this.registrarService.getwillInfoById(this.student_no).subscribe(
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
  this.registrarService.getStudents(this.student_no).subscribe(
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
  this.registrarService.getPlacementLetter(this.student_no, this.fileName).subscribe(
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
  

  this.registrarService.getformById(this.student_no).subscribe(
    
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
      appReg_status: 'accepted',
      reg_comment: 'Application accepted'
    };
  
    this.registrarService.getApprove(data).subscribe(
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
    appReg_status: 'rejected',
    reg_comment: 'Application rejected'
  };

  this.registrarService.getApprove(data).subscribe(
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
