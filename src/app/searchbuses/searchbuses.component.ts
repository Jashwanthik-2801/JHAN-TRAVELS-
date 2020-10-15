import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
@Component({
  selector: 'app-searchbuses',
  templateUrl: './searchbuses.component.html',
  styleUrls: ['./searchbuses.component.css']
})

export class SearchbusesComponent implements OnInit {
  BusList:any;
  passenger:any;
  logged:any;
  conseats:any;
  constructor(private service:PassService,private router:Router,private toastr: ToastrService) { 
    this.BusList = {busNo:'',busType:'',timings:'',boardingPt:'',destination:'',seatsAvail:'',price:''}
    this.passenger = {}
  }

  ngOnInit(): void {
    this.logged = this.service.getUserLogged()
    this.BusList = this.service.getBusList();
   
    this.passenger = this.service.getpid()
    console.log(this.logged)
   
  }
 
async selectseat(bus:any): Promise<void>{
  console.log(this.service.getpid())
if(this.service.getUserLogged() == false){
  this.toastr.warning("Please login")
}

else{
  console.log(this.conseats)
  this.service.setbus(bus);
  
  await this.service.confirmedseats(bus.busNo).subscribe((result:any) => {console.log(result),this.service.setconseats(result)
  this.conseats = this.service.getnoofconseats();
  
  /* await this.delay(7000) */
  console.log(this.service.getconseats())
  if(this.conseats == 40){
    this.toastr.warning("No Available Seats!!!!");
    console.log(this.conseats)
}
else{
  this.router.navigate(['seatsel3']);
}})
 
}

}
private delay(ms: number): Promise<void> {
  return new Promise<void>(resolve =>
    setTimeout(resolve, ms));
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
  this.router.navigate(['homepage'])
}
login(){
  this.router.navigate(['login'])
}
register(){
  this.router.navigate(['register'])
}
}
