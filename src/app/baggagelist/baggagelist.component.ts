import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-baggagelist',
  templateUrl: './baggagelist.component.html',
  styleUrls: ['./baggagelist.component.css']
})
export class BaggagelistComponent implements OnInit {
   baggage:any;
   logged:any;
  constructor(private service:PassService,private router:Router,private toastr:ToastrService) {
    this.baggage = {source:'',destination:'',typeOfGoods:'',senderMailId:'',recieverMobileNo:'',recieverMailId:'',passenger:'',date:'',quantity:''}
   }

  ngOnInit(): void {
    this.logged  = this.service.getUserLogged();
     this.service.getbaggagelist().subscribe((result:any) => {this.baggage = result}) 
  }

approvereq(baggage:any){

  this.service.baggagecon(baggage).subscribe((result:any) => {console.log(result)})
  this.toastr.success("Baggage Approved!!")
}
deletereq(baggage:any){
  
  this.service.deletebaggage(baggage.baggageId).subscribe((result:any) => {console.log(result)});
  this.toastr.success("Baggage Disapproved!!")
}
logout(){
  
  this.service.setUserLoggedOut();
  this.router.navigate(['homepage'])
}
}
