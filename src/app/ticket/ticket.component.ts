import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticket:any;
  tickets:any;
  seat:any;
  seats:any;
  t:any;
  constructor(private service:PassService,private router:Router) {
   this.ticket = {ticketNo:'',dateOfJourney:'',noOfSeats:'',totalFare:'',bus:'',passenger:''}
   this.tickets={ticketNo:'',dateOfJourney:'',noOfSeats:'',totalFare:'',bus:'',passenger:''}
   this.seat = {seatNo:'',bus:'',passenger:'',ticket:''}
   
   }

   ngOnInit(): void {
    this.ticket.dateOfJourney = this.service.getdoj();
    this.ticket.bus = this.service.getbus();
    this.ticket.totalFare =  this.service.gettotalfare();
    this.ticket.noOfSeats = this.service.getnoofseats(); 
    this.ticket.passenger= this.service.getpassid(); 
    console.log(this.ticket);
    this.service.reserveticket(this.ticket).subscribe((result:any) => {console.log(result),this.ticket=result,this.service.setticket(this.ticket.ticketNo)});
    this.service.getTickets(this.service.getpid()).subscribe((result:any) => {console.log(result)})
/*       this.t = this.service.getseats();
      console.log()
      for(var i =0;i<this.ticket.noOfSeats;i++){
       
       this.seat.seatNo = this.t[i];
       this.seat.bus = this.service.getbus();
       this.seat.passenger= this.service.getpassid();
       this.seat.ticket = this.ticket;
       this.seats.push(this.seat);
       
      } */
   /*  console.log(this.ticket.bus.busNo)
    this.tickets.ticketNo = this.ticket.ticketNo;
    this.tickets.dateOfJourney = this.ticket.dateOfJourney;
    this.tickets.seatNo = this.ticket.seatNo;
    this.tickets.totalFare = 1000;
    this.tickets.bus = this.ticket.bus.busNo;
    this.tickets.passenger = this.ticket.passenger.passId;
    console.log(this.tickets) 
    console.log(this.ticket.passenger.passId) */
   
     
    /* this.service.clearseats(); */

  }

}
