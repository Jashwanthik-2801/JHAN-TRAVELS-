import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';

@Component({
  selector: 'app-nonuserhome',
  templateUrl: './nonuserhome.component.html',
  styleUrls: ['./nonuserhome.component.css']
})
export class NonuserhomeComponent implements OnInit {
  user:any;
  constructor(private service:PassService) { 
    this.user = this.user
    
  }

  ngOnInit(): void {
    this.user = this.service.getUserLogged()
    console.log(this.user)
  }

}
