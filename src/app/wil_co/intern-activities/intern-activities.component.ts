import { Component } from '@angular/core';
import { WilCoService } from 'src/app/services/wil-co.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intern-activities',
  templateUrl: './intern-activities.component.html',
  styleUrls: ['./intern-activities.component.css']
})
export class InternActivitiesComponent {
  student_no: any;

  regStuddata: any;
  tempdata: any;



  tempStudentInfo: any; //switch to staff number

  constructor(private WilCoService: WilCoService,private route : Router ){}
  

  ngOnInit(): void {
    this.tempStudentInfo = localStorage.getItem('user');
    const studInfo = JSON.parse(this.tempStudentInfo);
    this.student_no = studInfo.student_no; //Use this to get the logged in Wil_Co


    ///////////////////Registered students//////////////////////////
    this.WilCoService.getRegisteredStu(this.tempdata).subscribe((data) => {
      this.tempdata = data;
      this.regStuddata = data.result;
      console.log(data.result);
    });
  }

  studentProfile(profile:any){

    localStorage.setItem("profile",profile.student_no+" "+profile.name+"  "+profile.surname);
   // console.log(profile)
    this.route.navigate(["/StudentActivities"])

    

  }
}
