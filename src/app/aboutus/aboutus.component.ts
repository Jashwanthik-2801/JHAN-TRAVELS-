import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassService } from '../pass.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
logged:any;
  constructor(private router:Router,private service:PassService) { }
  
  ngOnInit(): void {
    this.logged = this.service.getUserLogged();
  }
  baggage(){
    this.router.navigate(['baggage'])
  }
  passtickets(){
    this.router.navigate(['passtickets'])
  }
  logout(){
    console.log("hi")
    
    this.service.setUserLoggedOut();
    this.router.navigate(['./'])
  }
  login(){
    this.router.navigate(['login'])
  }
  register(){
    this.router.navigate(['register'])
  }
}
