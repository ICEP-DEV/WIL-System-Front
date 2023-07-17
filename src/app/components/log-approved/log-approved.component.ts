import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log-approved',
  templateUrl: './log-approved.component.html',
  styleUrls: ['./log-approved.component.css']
})
export class LogApprovedComponent {

  student_no:any = '';
  surname:any = '';
  name : any = '';
  

  constructor(private route:ActivatedRoute){}

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.student_no = params['Student_no'];
      this.surname = params['surname']
      this.name = params ['name']
 
    });
  }

}
