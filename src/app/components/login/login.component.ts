import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup = new FormGroup({})
  isSubmitted  =  false;
  today: number = Date.now();

  constructor(private formBuilder: FormBuilder,private router: Router, private route:ActivatedRoute, private service:LoginService) { }

ngOnInit(): void{
  this.loginForm = this.formBuilder.group({
    userType: new FormControl('', [Validators.required]),
    admin_no: new FormControl(''),
    student_no: new FormControl(''),
    registrar_no: new FormControl(''),
    itsPin: new FormControl('', [Validators.required]),
  })

}

get formControls() { return this.loginForm.controls; }

signIn(){
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }

  const userType = this.loginForm.value.userType;
  if (userType == "admin") {
    this.service.login({userType, admin_no: this.loginForm.value.admin_no, itsPin: this.loginForm.value.itsPin}).subscribe({
      next: res =>{
        var myobject: any = {
          token: "", admin: {}
        };

        myobject = res;
        console.log(myobject);

        if (myobject) {
          localStorage.setItem("user", JSON.stringify(myobject.data));
          localStorage.setItem("auth-token", myobject.token);
        }
        this.router.navigate(['/']);
      }
    })
  } else if (userType === "student") {
    this.service.login({userType, student_no: this.loginForm.value.student_no, itsPin: this.loginForm.value.itsPin}).subscribe({
      next: res =>{
        var myobject: any = {
          token: "", student: {}
        };

        myobject = res;
        console.log(myobject);

        if (myobject) {
          localStorage.setItem("user", JSON.stringify(myobject.data));
          localStorage.setItem("auth-token", myobject.token);
        }
        this.router.navigate(['/recommendation']);
      }
    })
  } else if (userType === "registrar") {
    this.service.login({userType, registrar_no: this.loginForm.value.registrar_no, itsPin: this.loginForm.value.itsPin}).subscribe({
      next: res =>{
        var myobject: any = {
          token: "", registrar: {}
        };

        myobject = res;
        console.log(myobject);

        if (myobject) {
          localStorage.setItem("user", JSON.stringify(myobject.data));
          localStorage.setItem("auth-token", myobject.token);
          console.log(myobject.token);
          
        }
        this.router.navigate(['/']);
      }
    })
  } else {
    console.log("Invalid user type");
  }
}
}
