import { Component } from '@angular/core';
import { WilCoService } from 'src/app/services/wil-co.service';

@Component({
  selector: 'app-wil-eva-super',
  templateUrl: './wil-eva-super.component.html',
  styleUrls: ['./wil-eva-super.component.css']
})
export class WilEvaSuperComponent {
  tempdata:any;
  co_supdata: any;
  studentNo:any;
  studName:any;

  constructor(private WilCoService: WilCoService){}


  ngOnInit(): void {
    this.studentNo = localStorage.getItem('studentNo')?.toString();
    this.studName = localStorage.getItem('studName')?.toString();
    console.log(this.studentNo);
    console.log(this.studName);

    // ///////////////////Get Evaluation//////////////////////////
    this.WilCoService.getEva_Super(Number(this.studentNo)).subscribe((data) => {
      this.tempdata = data;
      this.co_supdata = data.result;
      console.log(data.result)
    });

    
  }

}
