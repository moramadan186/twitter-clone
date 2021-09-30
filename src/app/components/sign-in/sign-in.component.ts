import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router'; 
import { SignUpComponent } from '../sign-up/sign-up.component';
// import 'bootstrap/dist/css/bootstrap.css'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void { }
  @ViewChild(SignUpComponent)SignUpComp!: SignUpComponent;
  ngAfterViewInit(): void {
    this.SignUpComp.ngOnInit();
  }
  onLogin(loginEmail:HTMLInputElement,loginPassword:HTMLInputElement){
    let email=loginEmail.value,password=loginPassword.value;
    if(this.SignUpComp.isNotEmpty(email)&&this.SignUpComp.isNotEmpty(password)){
      this.SignUpComp.fireAuthObj.signInWith({
        email:email,
        password:password,
        onComplete:(uc)=>{
          alert("logged in");
          this.router.navigate(['/home']);
        },
        onFail:(err)=>{alert(err)}
      })
    }
  }

}
