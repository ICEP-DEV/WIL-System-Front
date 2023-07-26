import { Component } from '@angular/core';
import { WilCoService } from 'src/app/services/wil-co.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wil-interns',
  templateUrl: './wil-interns.component.html',
  styleUrls: ['./wil-interns.component.css']
})
export class WilInternsComponent {
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
}
