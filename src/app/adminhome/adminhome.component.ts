import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassService } from '../pass.service';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
logged:any;
  constructor(private router : Router,private service:PassService) { }

  ngOnInit(): void {
    this.logged  = this.service.getUserLogged();
  }
  addbus():void{
    this.router.navigate(['addbus']);
  }
  getbuslist():void{
    this.router.navigate(['showbuses']);
  }
getbaggagelist():void{
  this.router.navigate(['baggagelist']);
}
logout(){
  
  this.service.setUserLoggedOut();
  this.router.navigate(['homepage'])
}
}
