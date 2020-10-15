import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassService } from '../pass.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
logged:any;
  constructor(private router: Router,private service:PassService) { }

  ngOnInit(): void {
    this.logged = this.service.getUserLogged()
  }
calllogin(){
  this.router.navigate(['login'])
}
logout(){
  this.service.setUserLoggedOut();
}
}
