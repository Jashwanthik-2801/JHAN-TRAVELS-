import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PassService } from './pass.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jhantravels';
  logged:any;
  constructor(private router:Router,private service: PassService) {
    this.logged = this.service.getUserLogged();
   
  }
  ngOnInit(): void {
  
  
       if(this.logged == true){
     
   this.router.navigate(['./']) 
   } 
  }
  
}
