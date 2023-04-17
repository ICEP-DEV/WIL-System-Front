import { Component, OnInit } from '@angular/core';
import { WilService } from '../wil.service';

@Component({
  selector: 'app-internlife',
  templateUrl: './internlife.component.html',
  styleUrls: ['./internlife.component.css']
})
export class InternlifeComponent implements OnInit{
  mydata : any;
  tempdata : any;
constructor(private WilService: WilService) {
 
}

  ngOnInit(): void {
    this.WilService.getUserDetails().subscribe((data) => { 
    this.tempdata = data;
    this.mydata = this.tempdata.data
  });
  }
  
}
