import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any;
  i:any;
  constructor(private service: PassService,private router:Router,private toastr: ToastrService) { 
    this.user = {passName:'',gender:'',age:'',email:'',mobileNo:'',address:'',loginId:'',password:'',confirmPassword:''};
   
  }

  ngOnInit(): void {
    
  }
  registerUser(registerForm): void {
    this.service.registerEmp(registerForm).subscribe((result:any) => console.log("success"));
    this.toastr.success("Registered Successfully")
    this.router.navigate(['login']);
    console.log(registerForm);
  }
  register(): void {
    console.log('register method is called....');
    
    console.log(this.user);
  }
}
