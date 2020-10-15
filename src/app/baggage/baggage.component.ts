import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.component.html',
  styleUrls: ['./baggage.component.css']
})
export class BaggageComponent implements OnInit {
baggage:any;
buslist:any;
logged:any;
  constructor(private service:PassService,private router:Router,private toastr:ToastrService) {
    this.baggage = {source:'',destination:'',typeOfGoods:'',senderMailId:'',recieverMobileNo:'',recieverMailId:'',passenger:'',date:'',quantity:''}
   }

  ngOnInit(): void {
       this.logged = this.service.getUserLogged()
      this.service.buslist().subscribe((result:any) => {this.buslist = result})
  }
async addBaggage(baggageform:any){
  this.baggage.source = baggageform.source
  this.baggage.destination = baggageform.destination
  this.baggage.typeOfGoods = baggageform.typeOfGoods
  this.baggage.senderMailId = baggageform.senderMailId
  this.baggage.recieverMobileNo = baggageform.recieverMobileNo
  this.baggage.recieverMailId = baggageform.recieverMailId
  this.baggage.date = baggageform.date
  this.baggage.quantity = baggageform.quantity
  this.baggage.passenger = this.service.getpassid()
  console.log(this.baggage.passenger)
  this.service.setbaggagereqs(this.baggage);
 await  this.service.addbaggage(this.baggage).subscribe((result:any) => {console.log(result),console.log("hi")})
}
submit(){
   if(this.logged){
     this.toastr.success('successfully sent')
   }
  else{
    this.toastr.warning('please login')
  }
}
baggagef(){
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
