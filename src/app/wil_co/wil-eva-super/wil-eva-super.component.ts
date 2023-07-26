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
  initials:any;
  surname:any;
  

  constructor(private WilCoService: WilCoService){}


  ngOnInit(): void {
    this.studentNo = localStorage.getItem('studentNo')?.toString();
    this.initials = localStorage.getItem('initials')?.toString();
    this.surname = localStorage.getItem('surname')?.toString();
    console.log(this.studentNo);
    

    // ///////////////////Get Evaluation//////////////////////////
    this.WilCoService.getEva_Super(Number(this.studentNo)).subscribe((data) => {
      this.tempdata = data;
      this.co_supdata = data.result;
      console.log(data.result)
    });

    
  }

}
