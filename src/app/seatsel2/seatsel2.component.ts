import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seatsel2',
  templateUrl: './seatsel2.component.html',
  styleUrls: ['./seatsel2.component.css']
})
export class Seatsel2Component implements OnInit {
 

  constructor(private service:PassService,private router:Router) { }

  ngOnInit(): void {
  }
  test(s:any){
    this.service.setseats(s);
   
}
confirmseats(){
    console.log(this.service.getbus());
    console.log(this.service.getpassid());
    console.log(this.service.getdoj());
    this.router.navigate(['mytickets']);
}

}
