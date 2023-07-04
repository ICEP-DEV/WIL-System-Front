import { Component } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';


@Component({
  selector: 'app-mentee-rating',
  templateUrl: './mentee-rating.component.html',
  styleUrls: ['./mentee-rating.component.css']
})
export class MenteeRatingComponent {
   logData:string = 'PLACEHOLDER';
   textarea:any = document.getElementById('logText');
   
  constructor(private logEntry:MentorService){}

  ngOnInit() {
   // this.logData=this.logData;
  }

}
