import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-ep-information',
  templateUrl: './ep-information.component.html',
  styleUrls: ['./ep-information.component.css']
})
export class EpInformationComponent {

  empForm: FormGroup = new FormGroup({})
  isSubmitted: boolean = false; // Initialize isSubmitted property to false

  studentInfo: any;
  tempInfo: any
  tempStudentInfo: any
  studentNo: any

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private studentService: StudentService) { }


  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      approvedEmployer: ['', [Validators.required, Validators.pattern("^[a-zA-Z\s-]+$")]] ,
      contactPerson: ['', [Validators.required, Validators.pattern("^[a-zA-Z\s-]+$")]] ,
      telNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
      emp_email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      physicalAddress: ['', Validators.required],
      postalAddress: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      studyPeriod: new FormControl(''),
      student_no: "",
      applicationStatus: "PENDING",
      reg_app_status:"Pending"
    });


    this.tempStudentInfo = localStorage.getItem('user')

    var studInfo = JSON.parse((this.tempStudentInfo))
    this.studentNo = studInfo.student_no
    // console.log(this.studentNo);

  }

  get f() { return this.empForm.controls; }



  errorMessage: any

  onSubmit(): void {
   
    // Handle form submission and API call here
    this.empForm.value.student_no = this.studentNo
    // console.log(this.empForm.value.student_no);
    const formData = this.empForm.value;
    // this.studentNo  = this.studentNo.value
    this.isSubmitted = true;
    this.studentService.epForm(formData).subscribe(
      (response) => {
        // Handle success response
        console.log(response);
        this.router.navigate(['/placement-letter']);
      },
      (error) => {
        // Handle error response
        console.error(error);
      }
      
    );
    console.log(formData);

  }


  // this.errorMessage = " "
  // if (this.empForm.value.approvedEmployer == '') {
  //   this.errorMessage = "Name of approved employer is required"
  //   return this.errorMessage
  // }
  // const regLetters = /[^a-zA-Z\s]+/;
  // if(regLetters.test(this.empForm.value.approvedEmployer)){
  //   this.errorMessage = "Name Should be letters only"
  //   return this.errorMessage
  // }

}
