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
  studName:any;

  constructor(private WilCoService: WilCoService){}


  ngOnInit(): void {
    this.studentNo = localStorage.getItem('studentNo')?.toString();
    this.studName = localStorage.getItem('studName')?.toString();

    this.WilCoService.report(this.tempdata).subscribe((data) => {
      this.tempdata = data;
      this.reportdata = data.result;
    });

  }
}
