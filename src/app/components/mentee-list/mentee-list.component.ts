import { Component,  OnInit } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-mentee-list',
  templateUrl: './mentee-list.component.html',
  styleUrls: ['./mentee-list.component.css']
})
export class MenteeListComponent {
  table_data: any[] =[] ;
  rowCount: number = 0;
  tempMentorInform: any;
  email_address: any = '';

  constructor(private dataService: MentorService) { }

  ngOnInit() {
    this.tempMentorInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempMentorInform);
    this.email_address = studentInfo.student_no;
    this.getDataFromApi();
  }
  

  getDataFromApi() {
    this.dataService.getData(this.email_address).subscribe(
      response => {
        this.table_data = response.mentees;
        this.rowCount = this.table_data.length;
        console.log(this.table_data)
        
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  refreshTable(){
    this.getDataFromApi();
  }

  viewMentee(mentee: any) {
    // Handle the action when the "View" button is clicked
    console.log('View mentee:', mentee);
    // Perform any desired action here, such as opening a modal or navigating to a new page
  }

  

}
