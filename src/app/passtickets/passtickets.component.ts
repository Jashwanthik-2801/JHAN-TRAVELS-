import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassService } from '../pass.service';

@Component({
  selector: 'app-passtickets',
  templateUrl: './passtickets.component.html',
  styleUrls: ['./passtickets.component.css']
})
export class PassticketsComponent implements OnInit {
ticket:any;
seat:any;
logged:any;
  constructor(private service:PassService,private router:Router) {
    this.seat = {seatNo:'',bus:'',passenger:'',ticket:''}
    this.ticket={ticketNo:'',dateOfJourney:'',noOfSeats:'',totalFare:'',bus:'',passenger:''}
   }

  ngOnInit(): void {
    this.logged  = this.service.getUserLogged();
    console.log(this.service.getpid())
    this.service.getseatsbypid(this.service.getpid()).subscribe((result:any) => {console.log(result),this.seat=result})
   
  }
  cancelticket(){
    var l = this.seat.length;
  
  this.service.cancelticket(this.seat[l-1].ticket.ticketNo).subscribe((result:any) => {console.log(result)});
  }
  logout(){
   
    
    this.service.setUserLoggedOut();
    this.router.navigate(['homepage'])
  }
}
