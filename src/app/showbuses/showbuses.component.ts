import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'app-showbuses',
  templateUrl: './showbuses.component.html',
  styleUrls: ['./showbuses.component.css']
})
export class ShowbusesComponent implements OnInit {
  Bus:any;
  editObject:any;
  logged:any;
  constructor(private router : Router, private service: PassService) { 
    this.Bus = {busNo:'',busType:'',timings:'',boardingPt:'',destination:'',seatsAvail:'',busCode:'',price:''};
    this.editObject = {busNo:'',busType:'',timings:'',boardingPt:'',destination:'',seatsAvail:'',busCode:'',price:''};
  }

  ngOnInit(): void {
    this.logged  = this.service.getUserLogged();
    this.service.buslist().subscribe((result:any) => {this.Bus = result,console.log(this.Bus)});
  }
  
    
  showEditPopup(bus:any){
    this.editObject = bus;
    jQuery('#busModel').modal('show');
  }
  updateBus(){
    this.service.updatebus(this.editObject).subscribe((result:any) => alert(result));
    console.log(this.editObject);
  }
  logout(){
  
    this.service.setUserLoggedOut();
    this.router.navigate(['homepage'])
  }
}
