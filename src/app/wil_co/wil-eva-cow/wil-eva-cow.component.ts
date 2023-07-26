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
  initials:any;
  surname:any;
  

  constructor(private WilCoService: WilCoService){}


  ngOnInit(): void {
    this.studentNo = localStorage.getItem('studentNo')?.toString();
    this.initials = localStorage.getItem('initials')?.toString();
    this.surname = localStorage.getItem('surname')?.toString();
    console.log(this.studentNo);
    

    // ///////////////////Get evaluation//////////////////////////
    this.WilCoService.getCoEvaluation(Number(this.studentNo)).subscribe((data) => {
      this.tempdata = data;
      this.co_evadata = data.result;
      console.log(data.result)
    });
  }
}
