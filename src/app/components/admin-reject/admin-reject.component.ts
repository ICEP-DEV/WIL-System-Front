import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-reject',
  templateUrl: './admin-reject.component.html',
  styleUrls: ['./admin-reject.component.css']
})
export class AdminRejectComponent {
  studentNo!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.studentNo = this.route.snapshot.paramMap.get('student_no')!;
    console.log(this.studentNo);
    
  }
}
