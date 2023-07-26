import { Component, } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.css']
})
export class AddworkComponent {
  tempStudentInform: any;
  student_no: any = '';
  compName: any = ''
  dep_name:any = '';
  role: any = '';
  province:any = '';
  city:any = '';
  suburb:any = '';
  address:any = '';
  label:string ='';
  
  constructor(private workStation: StudentService, private router: Router) {

    
    
  }
  empty_space: boolean = false;
  

  ngOnInit(): void {
    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;
    
    this.addWorkPlace.student_no = this.student_no;
  }

  addWorkPlace = {
    student_no: this.student_no,
    companyName: this.compName, 
    departmentName: this.dep_name,
    role:this.role,
    province: this.province,
    city: this.city,
    suburb: this.suburb,
    address: this.address
  };

 /* addWork = new FormGroup({
    dep_name: new FormControl(),
    province: new FormControl(),
    city: new FormControl(),
    suburb: new FormControl(),
    address: new FormControl(),
  });*/

  consoleW(){
   
  console.log(this.addWorkPlace)
}

validateAndRedirect(){
  if(
    !this.compName ||
    !this.role ||
    !this.dep_name ||
    !this.province ||
    !this.city ||
    !this.suburb ||
    !this.address
  ){
    this.empty_space = true;
    //alert('All fields are required');
    this.router.navigateByUrl('/addwork')
    //this.label = 'All field are required'
  }else
  {
    this.saveWorkData();
    this.router.navigateByUrl('/workPlace-saved')
  }
}

  

  saveWorkData() {

     
    this.addWorkPlace = {
      student_no: this.student_no,
      companyName: this.compName,
      departmentName: this.dep_name,
      role: this.role,
      province: this.province,
      city: this.city,
      suburb: this.suburb,
      address: this.address
  }
    this.workStation.saveWorkstation(this.addWorkPlace).subscribe((response) => {
      console.log('POST request succesful', response);
    }),
      (error: any) => {
        console.error('POST request unsuccesful', error);
      };
  }

  /*onSubmit() {
    if (this.addWork.valid) {
      // Form is valid, perform desired action
    } else {
      // Form is invalid, display error messages or take appropriate action
    }
  }*/
}
