import { Component } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-mentee-list',
  templateUrl: './mentee-list.component.html',
  styleUrls: ['./mentee-list.component.css']
})
export class MenteeListComponent {
  data: any[] = [];

  constructor(private dataService: MentorService) { }

  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    this.dataService.getData().subscribe(
      (response: any) => {
        this.data = response;
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
