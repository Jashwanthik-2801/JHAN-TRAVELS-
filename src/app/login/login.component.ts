import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassService } from '../pass.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user : any;
public passenger :any;
public flag: any;
  constructor(private router : Router, private service: PassService,private toastr: ToastrService) { 
    this.user = {loginId:'', password: ''}; 
    this.passenger = {passId:'',passName:'',gender:'',age:'',email:'',mobileNo:'',address:'',loginId:'',password:''};
   
 }

  ngOnInit(): void {
  }
  loginUser(): void {
    console.log('loginuser method is called....');
    console.log(this.user);
  }
  validateUser(loginForm:any): void {
   
    if(loginForm.loginId === 'admin' && loginForm.password === 'admin'){
           this.service.setUserLoggedIn();
           this.router.navigate(['adminhome']);
    }
    else{
      
       this.service.loginPass(loginForm).subscribe((result:any) => {this.passenger=result;if (result != null){
        this.service.setUserLoggedIn();
        this.service.setpassid(this.passenger)
        this.router.navigate(['homepage']);
       }
      else{
       this.toastr.warning("Wrong Credentials")
      }});
        console.log(this.passenger);
     
    }

  }
  Register(){
    this.router.navigate(['register'])
  }
}
