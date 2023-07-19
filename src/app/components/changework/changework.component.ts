import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-changework',
  templateUrl: './changework.component.html',
  styleUrls: ['./changework.component.css']
})
export class ChangeworkComponent {

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
  data:any[] = [];
  
  constructor(private workStation: StudentService, private router: Router) {

    
    
  }
  empty_space: boolean = false;
  

  ngOnInit(): void {
    this.tempStudentInform = localStorage.getItem('user');
    const studentInfo = JSON.parse(this.tempStudentInform);
    this.student_no = studentInfo.student_no;
    
    
    this.getDataFromApi();
  }

  addWorkPlace = {
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
    this.router.navigateByUrl('/changework')
    //this.label = 'All field are required'
  }else
  {
    this.saveWorkData();
    this.router.navigateByUrl('/workPlace-saved')
  }
}

  

  saveWorkData() {

     
    this.addWorkPlace = {
      companyName: this.compName,
      departmentName: this.dep_name,
      role: this.role,
      province: this.province,
      city: this.city,
      suburb: this.suburb,
      address: this.address
  }
    this.workStation.updateWork(this.addWorkPlace,this.student_no).subscribe((response) => {
      console.log('POST request succesful', response);
    }),
      (error: any) => {
        console.error('POST request unsuccesful', error);
      };
  }

  getDataFromApi() {
    this.workStation.getWork(this.student_no).subscribe(
      (response: any) => {
        this.data = response.result;
        if(this.data.length > 0){
          this.compName = this.data[0].companyName;
          this.dep_name = this.data[0].departmentName;
          this.role = this.data[0].role;
          this.province = this.data[0].province;
          this.city = this.data[0].city;
          this.suburb = this.data[0].suburb;
          this.address = this.data[0].address;
          console.log(this.data);
        }
        
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
