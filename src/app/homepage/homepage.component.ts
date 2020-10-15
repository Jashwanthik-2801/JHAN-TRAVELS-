import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassService } from '../pass.service';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   Bus:any;
   x:any;
   sd:any;
   logged:any;
  constructor(private router:Router,private service: PassService,private toastr:ToastrService) {
    this.Bus = {busNo:'',busType:'',timings:'',boardingPt:'',destination:'',seatsAvail:''};
    this.x = {busNo:'',busType:'',timings:'',boardingPt:'',destination:'',seatsAvail:''};
   }

  ngOnInit(): void {
   
    this.logged = this.service.getUserLogged()
   

  }
getbuseslist(busForm:any):any{
    
    
}
async search(busform:any): Promise<void>{
   
    
  await  this.service.buslistbysd(busform.source+busform.destination+busform.today1).subscribe((result:any) => {this.Bus=result;console.log(result);this.service.setBusList(this.Bus);
      if(this.Bus.length == 0){
        this.toastr.warning("Sorry!! No Buses Available for this route")
      }
      else{
      this.router.navigate(['searchbuses'])}});
    this.service.setdoj(busform.today1)
  
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
