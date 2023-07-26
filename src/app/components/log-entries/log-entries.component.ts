import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-log-entries',
  templateUrl: './log-entries.component.html',
  styleUrls: ['./log-entries.component.css']
})
export class LogEntriesComponent {
  

    student_no:any = '';
    status:any[] = [];
    approval: any[] = [];
    tempMentorInform:any ='';
    images:string[] = [".\assets\onlySubmit.png",".\assets\tick.png",".\assets\lockOpen.png",".\assets\lockClosed.png"] 
    
    
    constructor(private stud_service:StudentService ,  private router: Router){}
    
    ngOnInit() {
      this.tempMentorInform = localStorage.getItem('user');
      const studentInfo = JSON.parse(this.tempMentorInform);
      this.student_no = studentInfo.student_no;
      this.getDataFromApi();
    }
    
    
    
    
    getDataFromApi() {
    
      //this.student_no = 212345678;
      this.stud_service.getStatus(this.student_no).subscribe(
        response => {
          this.status = response.result;
          this.approval = response.result;
          console.log(this.student_no)
          console.log(this.status)
    
           this.approval.forEach(function(value)
           {
              if(value === "yes")
              {
                
                  value= ".\assests\lockClosed.png";
              }
           });
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
      
    getStatusPageRoute(status: string, approval: string): string {
      // Assuming you have defined routes for each status page
      if (status === 'open') {
        return '/log-entries-internal';
      } else if (status === 'closed') {
        return '/log-entries-closed';

      }else if (approval === 'no') {
        return '/log-entries-approval-status';

      }else if (approval === 'Yes') {
        return '/log-entries-submitted';
      }

      // Add more route mappings as needed
      return '/'; // Return an empty string if no route matches the status
    }







    //navigateToNextPage(status : string , approval : string ): void {
     // if(status === 'submitted' && approval==="yes")
      //{
        //this.router.navigate(['/log-entries-submitted']);
    
      //}
    
    
    }

  
  //ngOnInit(): void { StudentService.logentrie().unsubscribe((this.data) => {
    //console.log(this.data.log_description)
  
 // myData = this.data
  
  //})
  
  //ngOnInit() {
    //this.route.params.subscribe(params => {
      // this.studentNumber = params['studentNumber'];
     // this.student_no = params['studentNumber']
      //this.logentrie();
    
    //});
  //}


//this.studentService.getlogtable.subscribe.(
 // (response)=>{
 //   console.log(response)
   // this.student_no= response;
  //}
//)







  
  
  
  










  


  

  
