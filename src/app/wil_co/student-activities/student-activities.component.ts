import { Component } from '@angular/core';
import { WilCoService } from 'src/app/services/wil-co.service';

@Component({
  selector: 'app-student-activities',
  templateUrl: './student-activities.component.html',
  styleUrls: ['./student-activities.component.css']
})
export class StudentActivitiesComponent {
  Dtotal: any;
  Etotal: any;
  final:any;
  
  student_no: any;

  Placementdata: any;
  Mentordata: any
  tempdata: any;
  sysdata:any;
  reportdata:any;
  

  studentNo: any;
  initials: any;
  surname:any;

  tempStudentInfo: any; //switch to staff number

  constructor(private WilCoService: WilCoService){}

  ngOnInit(): void {
    this.tempStudentInfo = localStorage.getItem('user');
    const studInfo = JSON.parse(this.tempStudentInfo);
    this.student_no = studInfo.initials; //Use this to get the logged in Wil_Co

    this.studentNo = localStorage.getItem('studentNo')?.toString();
    this.initials = localStorage.getItem('initials')?.toString();
    this.surname = localStorage.getItem('surname')?.toString();
    console.log(this.studentNo);
    console.log(this.initials);
    console.log(this.surname);
    ///////////////////Registered students//////////////////////////
    // this.WilCoService.getRegisteredStu(this.tempdata).subscribe((data) => {
    //   this.tempdata = data;
    //   this.mydata = this.tempdata.data;
    // });

    // ///////////////////Student Deatils(Profile)//////////////////////////
      this.WilCoService.getStudDetail(this.tempdata).subscribe((data) => {
      this.tempdata = data;
      this.tempdata = data.result;
    });

    

    ///////////////////Placement Deatils//////////////////////////
      this.WilCoService.getPlacement(Number(this.studentNo)).subscribe((data) => {
      this.tempdata = data;
      this.Placementdata = data.result;
      // console.log(data.result);
      
    });

    ///////////////////Student Deatils//////////////////////////
      this.WilCoService.getMentor(Number(this.studentNo)).subscribe((data) => {
      this.tempdata = data;
      this.Mentordata = data.result;
      console.log(data.result);
    });


    // ///////////////////Get Report//////////////////////////
    this.WilCoService.report(this.tempdata).subscribe((data) => {
      this.tempdata = data;
      this.reportdata = data.result;
      console.log(data.result)
    });
    

    // ///////////////////Documentation Details//////////////////////////
  //   this.WilCoService.report(this.tempdata).subscribe((data) => {
  //     this.tempdata = data;
  //     this.reportdata = data.result;
  //     // console.log(data.result)
  // });
    // ///////////////////Student EVALUATION//////////////////////////
    // this.WilCoService.getEvaluation(this.tempdata).subscribe((data) => {
    //   this.tempdata = data;
    //   this.mydata = this.tempdata.data;
    // });
    
  }

  newtabpdf(){
    window.open("http://192.168.27.46:8080/api/sysDoc");
  }

  
  e_SubTot(){
    
    const Super_rate = parseInt((document.getElementById('Super_rate')as HTMLSelectElement).value) * 0.625;
    const co_W_rate = parseInt((document.getElementById('co_W_rate')as HTMLSelectElement).value) * 0.625;

    this.Etotal = Super_rate + co_W_rate;
    this.calculateTotal();
  }

  d_SubTot(){
    
    const logbook = parseInt((document.getElementById('logbook')as HTMLSelectElement).value) * 0.25;
    const ass1 = parseInt((document.getElementById('assignment')as HTMLSelectElement).value) * 0.125;
    const systemD = parseInt((document.getElementById('systemDoc')as HTMLSelectElement).value) * 0.50;

    this.Dtotal = (logbook + ass1 + systemD);

    this.calculateTotal();
  }

  calculateTotal() {
    this.final = (this.Dtotal + this.Etotal)/2;
    (document.getElementById('total') as HTMLHeadElement).textContent = this.final.toString();
}

  ////////Progress-bar////////////
    calculateProgress(): number {
      const currentDate = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      const totalDuration = sixMonthsAgo.getTime() - currentDate.getTime();
      const elapsedDuration = sixMonthsAgo.getTime() - currentDate.getTime();

      const progressPercentage = (elapsedDuration / totalDuration) * 100;
      return Math.max(0, Math.min(progressPercentage, 100));
    }

}
