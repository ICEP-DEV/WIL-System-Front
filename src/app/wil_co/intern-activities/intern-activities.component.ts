import { Component } from '@angular/core';
import { WilCoService } from 'src/app/services/wil-co.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intern-activities',
  templateUrl: './intern-activities.component.html',
  styleUrls: ['./intern-activities.component.css']
})
export class InternActivitiesComponent {
  wil_no: any;

  regStuddata: any;
  tempdata: any;



  tempStudentInfo: any; //switch to staff number

  constructor(private WilCoService: WilCoService,private route : Router ){}
  

  ngOnInit(): void
  {
    this.tempStudentInfo = localStorage.getItem('user');
    const studInfo = JSON.parse(this.tempStudentInfo);
    this.wil_no = studInfo.wilCoord_id; //Use this to get the logged in Wil_Co
    console.log(studInfo.wilCoord_id)

    ///////////////////Registered students//////////////////////////
    this.WilCoService.getRegisteredStu(Number(this.wil_no)).subscribe((data) => {
      this.tempdata = data;
      this.regStuddata = data.result;
      console.log(data);
    });
  }

  studentProfile(profile:any){

    localStorage.setItem("studentNo",profile.student_no);
    localStorage.setItem("initials",profile.initials);
    localStorage.setItem("surname",profile.surname);
   
   // console.log(profile)
    this.route.navigate(["/StudentActivities"])

    

  }
}
