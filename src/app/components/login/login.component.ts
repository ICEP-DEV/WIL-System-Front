import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({})
  isSubmitted = false;
  today: number = Date.now();

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private service: LoginService) {

  }

ngOnInit(): void{
  this.loginForm = this.formBuilder.group({
    student_no: new FormControl('', [Validators.required,]),
    itsPin: new FormControl('', [Validators.required,]),
  })

}



  get formControls() { return this.loginForm.controls; }

signIn(){
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }
  this.service.login(this.loginForm.value).subscribe({
    next: res =>{
      var myobject: any = {
        token: "", student: {}
      };

        myobject = res;
        console.log(myobject);

      if (myobject) {
       ;
        
        localStorage.setItem("user", JSON.stringify(myobject.data));
       // localStorage.setItem("auth-token", myobject.token);
     //
      }
    }
  })
  
  this.router.navigateByUrl('/');

}
}
