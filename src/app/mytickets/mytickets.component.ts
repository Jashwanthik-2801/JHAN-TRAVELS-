import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var jQuery: any;
@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css']
})
export class MyticketsComponent implements OnInit {
passid:any;
busno:any;
seats:any;
totalfare:any;
ticket:any;
s:any;
seat:any;
t:any;
sticket:any;
passdetails:any;
logged:any;
  constructor(private service:PassService,private router:Router,private toastr: ToastrService) { 
    this.passid = this.service.getpid();
    this.busno = this.service.getbusid();
    this.seats = this.service.getseats();
    console.log(this.seats)
    this.totalfare = this.service.gettotalfare();
    this.ticket = {ticketNo:'',dateOfJourney:'',noOfSeats:'',totalFare:'',bus:'',passenger:''}
    this.seat = {seatNo:'',bus:'',passenger:'',ticket:''}
    this.s = [];
    this.passdetails = {passName:'',passAge:'',passGender:''}
    this.sticket = {ticketNo:'',dateOfJourney:'',noOfSeats:'',totalFare:'',bus:'',passenger:''}
  }

  ngOnInit(): void {
   this.logged  = this.service.getUserLogged();
    
}
async bookticket(){
  
  this.ticket.dateOfJourney = this.service.getdoj();
  this.ticket.bus = this.service.getbus();
  this.ticket.totalFare =  this.service.gettotalfare;
  this.ticket.noOfSeats = this.service.getnoofseats(); 
  this.ticket.passenger= this.service.getpassid(); 
  console.log(this.ticket);
  await this.service.reserveticket(this.ticket).subscribe((result:any) => {console.log(result)});
  this.setseats()
  this.toastr.success("Thank You for Booking")
}
async setseats(){
  await this.delay(200)
     this.service.getTickets(this.service.getpid()).subscribe((result:any) =>{this.sticket = result.pop(),console.log(this.sticket) ,
    console.log(this.sticket)
    
    this.t = this.service.getseats();
    this.t = this.t.split(',');
 
    for(var i =0;i<this.t.length;i++){
   
   this.seat.seatNo = this.t[i];
   console.log(this.t[i])
   console.log(this.seat.seatNo)
   this.seat.bus = this.service.getbus();
   this.seat.passenger= this.service.getpassid();
   this.seat.ticket = this.sticket;
   console.log(this.seat)
   this.service.reserveseat(this.seat).subscribe((result:any) => {console.log(result)})
  
}
     });
     
}
cancelticket(){
  console.log(this.seat.ticket.ticketNo)
  this.service.cancelticket(this.seat.ticket.ticketNo).subscribe((result:any) => {console.log(result)});
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
}
