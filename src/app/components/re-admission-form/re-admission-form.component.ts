import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-re-admission-form',
  templateUrl: './re-admission-form.component.html',
  styleUrls: ['./re-admission-form.component.css']
})
export class ReAdmissionFormComponent {
  reAdmissionForm: FormGroup = new FormGroup({})
  isSubmitted: boolean = false; // Initialize isSubmitted property to false

  studentInfo: any;
  tempInfo: any
  tempStudentInfo: any
  studentNo: any


  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.reAdmissionForm = this.formBuilder.group({
     
      campus: new FormControl(''),
      firstChoice : new FormControl(''),
      finacialAid : new FormControl(''),
      enrollType : new FormControl(''),
      student_no: ""
    });

    this.tempStudentInfo = localStorage.getItem('user')

    var studInfo = JSON.parse((this.tempStudentInfo))
    this.studentNo = studInfo.student_no
    // console.log(this.studentNo);

  }

  get f() { return this.reAdmissionForm.controls; }



  errorMessage: any

  onSubmit(): void {
   
    // Handle form submission and API call here
    this.reAdmissionForm.value.student_no = this.studentNo
    // console.log(this.empForm.value.student_no);
    const formData = this.reAdmissionForm.value;
    // this.studentNo  = this.studentNo.value
    this.isSubmitted = true;
    this.studentService.ReAdmission(formData).subscribe(
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
}
