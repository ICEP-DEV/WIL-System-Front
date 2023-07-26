import { Component } from '@angular/core';
import { WilCoService } from 'src/app/services/wil-co.service';

@Component({
  selector: 'app-wil-co-report',
  templateUrl: './wil-co-report.component.html',
  styleUrls: ['./wil-co-report.component.css']
})
export class WilCoReportComponent {
  tempdata:any;
  reportdata: any;
  studentNo:any;
  initials:any;
  surname:any;
  studName:any;

  constructor(private WilCoService: WilCoService){}


  ngOnInit(): void {
    this.studentNo = localStorage.getItem('studentNo')?.toString();
    this.initials = localStorage.getItem('initials')?.toString();
    this.surname = localStorage.getItem('surname')?.toString();
    console.log(this.studentNo);
    console.log(this.studName);

    // ///////////////////Get Report//////////////////////////
    this.WilCoService.report(Number(this.studentNo)).subscribe((data) => {
      this.tempdata = data;
      this.reportdata = data.result;
      console.log(data.result)
    });

  }
}
