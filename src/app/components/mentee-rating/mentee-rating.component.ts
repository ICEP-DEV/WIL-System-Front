import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MentorService } from 'src/app/services/mentor.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mentee-rating',
  templateUrl: './mentee-rating.component.html',
  styleUrls: ['./mentee-rating.component.css']
})
export class MenteeRatingComponent {
   logData:string = '';
   student_no:string= '';
   submitted_at:string = '';
   data:any[] = [];
   logbook_id:any = '';
   log_description:any = '';
   approval:any = '';
   parsedDate:any= '';
   formattedDate:any= '';
   rawTime:any ='';
   surname:any ='';
   name: any = '';
   month: any = '';

   

   
   
  constructor(private logEntry:MentorService, private route:ActivatedRoute,  private datePipe: DatePipe,  private router: Router){}

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.student_no = params['Student_no'];
      this.surname = params['surname']
      this.name = params ['name']
      this.month = params['month']
      this.rawTime = params['submitted_time'];
      
    });
    this.getDataFromApi();
    console.log(this.month)
  }

  getDataFromApi() {
    this.logEntry.logDesc(this.student_no, this.month).subscribe(
      (response: any) => {
        this.data = response.result;
        if(this.data.length > 0){
          this.logbook_id = this.data[0].logbook_id;
          this.log_description = this.data[0].log_description;
          this.logData = this.log_description;
          console.log(this.data);
        }
        
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


handleButtonClick(action: string) {
  if (action === 'approve') {
    this.approval = 'Approved';
    this.router.navigate([`/log_approved/${this.student_no}/${this.surname}/${this.name}/${this.month}/${this.approval}`]);
  } else if (action === 'reject') {
    this.approval = 'Rejected';
    this.router.navigate([`/log_rejected/${this.student_no}/${this.surname}/${this.name}/${this.month}/${this.approval}`]);
  }

  this.logEntry.updateCell(this.logbook_id, this.approval).subscribe(
    response => {
      console.log('Cell updated successfully', response);
    },
    error => {
      console.error('Error updating cell', error);
    }
  );
}

convertDateFormat(dateTime: string): string {
  this.parsedDate = new Date(dateTime);
  this.formattedDate = this.datePipe.transform(this.parsedDate, 'yyyy-MM-dd HH:mm:ss');
  return this.formattedDate;
}

}
