import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import{FirebaseTSAuth} from 'firebasets/firebasetsAuth/firebaseTSAuth'
// import $ from "jquery";
// import * as bootstrap from "bootstrap";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  fireAuthObj:FirebaseTSAuth;
  AccountCreated:boolean=false;
  @ViewChild('signUpContent')signUpContent!: ElementRef;
  constructor(private router: Router) {
    this.fireAuthObj=new FirebaseTSAuth();
   }

  ngOnInit(): void {}



  onRegisterClick(registerEmail:any,registerPassword:any,registerConfirmPassword:any){
    let email=registerEmail.value , 
    password=registerPassword.value,
    confirmPassword=registerConfirmPassword.value;

    if(this.isNotEmpty(email)&&this.isNotEmpty(password)&&this.isNotEmpty(confirmPassword)
    && this.isAMatch(password,confirmPassword)){
      this.fireAuthObj.createAccountWith({
        email:email,
        password:password,
        onComplete:(uc)=>{
          alert("Account Created");
          // this.router.navigate(['']);
          // $(this.signUpContent.nativeElement).modal('hide');
          registerEmail.value="";
          registerPassword.value="";
          registerConfirmPassword.value="";
          this.AccountCreated=true;
          // this.signUpContent.nativeElement.style.display="none"
        },
        onFail:(err)=>{
          alert(err)
        }
      })
    }
  }

  isNotEmpty(text:string){return text!=null && text.length>0;}
  isAMatch(text:string,compareWith:string){return text == compareWith;}

  submitData(){}

}
