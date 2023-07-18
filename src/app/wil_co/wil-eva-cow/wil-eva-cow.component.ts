import { Component } from '@angular/core';
import { WilCoService } from 'src/app/services/wil-co.service';

@Component({
  selector: 'app-wil-eva-cow',
  templateUrl: './wil-eva-cow.component.html',
  styleUrls: ['./wil-eva-cow.component.css']
})
export class WilEvaCowComponent {
  tempdata:any;
  co_evadata: any;
  studentNo:any;
  studName:any;

  constructor(private WilCoService: WilCoService){}


  ngOnInit(): void {
    this.studentNo = localStorage.getItem('studentNo')?.toString();
    this.studName = localStorage.getItem('studName')?.toString();
    console.log(this.studentNo);
    console.log(this.studName);

    // ///////////////////Get evaluation//////////////////////////
    this.WilCoService.getCoEvaluation(Number(this.studentNo)).subscribe((data) => {
      this.tempdata = data;
      this.co_evadata = data.result;
      console.log(data.result)
    });
  }
}
