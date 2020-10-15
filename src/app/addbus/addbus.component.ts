import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {
logged:any;
  constructor(private router : Router, private service: PassService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.logged  = this.service.getUserLogged();
  }
  registerBus(registerBus): void {
      this.service.addbus(registerBus).subscribe((result:any) => console.log("success"));
      this.toastr.success("Bus Added")
  }
  logout(){
  
    this.service.setUserLoggedOut();
    this.router.navigate(['homepage'])
  }
}
