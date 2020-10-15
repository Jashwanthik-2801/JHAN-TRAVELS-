import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PassService } from '../pass.service';
import { Router } from '@angular/router';
import { __exportStar } from 'tslib';
var  s;
var sl;
var fare;
var usercount;
var x;
var z=''
var y= '';


@Component({
  selector: 'app-seatsel3',
  templateUrl: './seatsel3.component.html',
  styleUrls: ['./seatsel3.component.css']
})
export class Seatsel3Component implements OnInit {
    seats:any;
    
  constructor(private service:PassService,private router:Router) { 
     this.seats= '';
     
     
  }
  
 ngOnInit(): void{
  
    var noOfSeats = 0, clickCounter = 0, k = 0, UserCount = 0;
    var confirmedseats=[];
    confirmedseats = this.service.getconseats();
    console.log( this.service.getconseats());
    fare = this.service.getselbusprice();
  $(document).ready(function () {
        
         x = 65;
        $('.table').attr('disabled', true);
        var TableRows = $('.table tr');
     
        var emptyCell = '<td></td>';
        for (var i = 1; i < TableRows.length; i++) {
            
            var rowID = 1;
            var colId = $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + 1 + ')').text();
            for (var j = 0; j < 10; j++) {
                var id = rowID + colId;
                var appendString = '<td><span class="tdBox" id=' + id + '><i class="fa fa-square-o"></i></span></td>';
                if (j == 11) {
                    $('.table tbody tr:nth-child(' + i + ')').append(emptyCell);
                    rowID--;
                }
                else{
                    $('.table tbody tr:nth-child(' + i + ')').append(appendString);
                  
                  rowID++;
            }
           
              }
             
            
          }
           for (var i = 1; i <= TableRows.length; i++) {
                   
                  z  = String.fromCharCode(x);
                  console.log(confirmedseats)
            for (var j = 0; j <= 10; j++) {
                  
                   y = ((j+1).toString()).concat(z);
                   
                   for(var k = 0;k < confirmedseats.length;k++){
                       console.log(confirmedseats.length)
                         if(y == confirmedseats[k]){
                           console.log(y) 
                           console.log(j) 
                    $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + (j+2) + ') span').addClass('redColor').css({"background-color": "red", "display": "block","opacity": "0.6","cursor":"not-allowed"}); 
                   
                }
            }
            
            }
            x = z.charCodeAt(0) + 1;   
            console.log(x)
                  
        } 
 
        /* for (var i = 1; i <= TableRows.length; i++) {
            for (var j = 0; j < 10; j++) {
                if(i == 2 && j == 3){
                    $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + (j) + ') span').addClass('redColor').css({"background-color": "red", "display": "block"});
                }
            }
        } */
      
          $('#Seats').focusout(function () {
              var BookedSeats = $('#Seats').val();
              noOfSeats = BookedSeats;
              if (BookedSeats > 6)
              {
                  confirm('Please select max of 6 seats only');
                  $('#Seats').val('');
                  $('.table tbody tr td span').css({opacity: 0.4});
              }
          });
          var redCount = 0;
          $('#Selectseat').unbind('click').bind('click', function () {
              if ($('#Seats').val() != '' || $('#Seats').val() != 0) {
                  var table =  <HTMLTableElement>document.getElementById("seatTable");
                  for (var i = 1, row; row = table.rows[i]; i++) {
                      for (var j = 1, col; col = row.cells[j]; j++) {
                          if (col.firstChild != null)
                          {
                              var ClassName = col.firstChild.className;
                              if (ClassName != '' && typeof ClassName !== "undefined" && ClassName !== null) {
                                  if (ClassName[1] == 'redColor') {
                                      redCount++;
                                  }
                                  else
                                  {
                                      break;
                                  }
                              }
                          }
                      }
                  }
                  
                  if (redCount == 40)
                  {
                      $('.table tbody tr td').unbind('click');
                      $('.table tbody tr td span').css({opacity: 0.4});
                      alert('Sorry HouseFull');
                      return;
                  }
                  $('.table').attr('disabled', false);
                  $('.table tbody tr td span').css({opacity: 1});
                  $('.table tbody tr td').unbind('click').bind('click', function () {
                      var ClassName = $(this).find('span').attr('class');
                      /* var id = $(this).find('span').attr('id'); */
                      ClassName = ClassName.split(" ");
                      if (ClassName[1] == 'greenColor') {
                          console.log(ClassName[1]);
                          console.log(id)
                          $(this).find('span').removeClass('greenColor').css({"background-color": "white"});
                          clickCounter--;
                      }
                      else
                      {
                          if (clickCounter >= noOfSeats)
                          {
                              return;
                          }
                          else
                          {
                              if (ClassName[1] == 'redColor')
                              {
                                  console.log(ClassName[1])
                                  return;
                              }
                              else
                              {
                                  $(this).find('span').addClass('greenColor').css({"background-color": "green", "display": "block"});
                                  clickCounter++;
                              }
                          }
                      }
                  });
              }
              else
              {
                  alert('Please select no of seats');
              }
          });
          $('#ConfirmSeat').unbind('click').bind('click', function () {
              var table = <HTMLTableElement> document.getElementById("seatTable");
              var idList = '';
              var UserName = $('#Name').val();
              if (UserName == '')
              {
                  alert('Please enter the name to confirm the seats');
                  return;
              }
              if ($('#Seats').val() == '' || $('#Seats').val() == 0)
              {
                  alert('Please enter number of seats to confirm');
                  return;
              }
              else
              {
               
                  for (var i = 1,row; row = table.rows[i]; i++) {
                      for (var j = 1, col; col = row.cells[j]; j++) {
                          if (col.firstChild != null)
                          {
                              var ClassName = col.firstChild.className;
                              if (ClassName != '' && typeof ClassName !== "undefined" && ClassName !== null) {
                                  ClassName = ClassName.split(" ");
                                  if (ClassName[1] == 'greenColor') {
                                      console.log(ClassName[1])
                                      UserCount++;
                                      idList += $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + (j + 1) + ') span').attr('id') + ',';
                                      $('.table tbody tr:nth-child(' + i + ') td:nth-child(' + (j + 1) + ') span').removeClass('greenColor').addClass('redColor').css({"background-color": "red", "display": "block"});
                                      
                                  }
                                  if (ClassName[1] == 'greenColor') {
                                      console.log(ClassName[1]) 
                                      redCount++;
                                  }
                              }
                          }
                      }
                  }
                  if (UserCount != noOfSeats)
                  {
                      UserCount = 0;
                      var array = idList.split(',');
                      for (var l = 0; l < array.length; l++) {
                          $('#' + array[l]).removeClass('redColor').addClass('greenColor').css({"background-color": "green", "display": "block"});
                      }
                      alert('selected seats does not match with the number of seats specified');
                      return;
                  }
                  idList = idList.substring(0, idList.length - 1);
                  var newRow = document.createElement('tr');
                  newRow.setAttribute('id', 'id_' + k);
                  $('.resultTable').append(newRow);
                  var td = document.createElement('td');
                  td.innerHTML = UserName;
                  document.getElementById('id_' + k).appendChild(td);
                   
                  td = document.createElement('td');
                  td.innerHTML = String (UserCount);
                  document.getElementById('id_' + k).appendChild(td);
                  
                  td = document.createElement('td');
                  td.innerHTML = idList;
                  document.getElementById('id_' + k).appendChild(td);
                  
                  td = document.createElement('td');
                  td.innerHTML = '₹'+String(UserCount*fare);
                  document.getElementById('id_' + k).appendChild(td);
                  
                  s = UserName;
                  sl = idList;
                  usercount = UserCount;
                  
                  
                  console.log(s)
                  k++;
                 
    
    
                  clickCounter = 0;
                  UserCount = 0;
                  $('#Name').val('');
                   $('#Seats').val(''); 
                  
                  
                  
                  $('.table tbody tr td').unbind('click');
                  $('.table tbody tr td span').css({opacity: 0.4});
              }
             
          });
      
      });
     
     
  }

  confirm(){
    console.log(s);
    console.log(sl);
    console.log(typeof sl)
    this.service.setseats(sl);
    console.log(typeof sl)
    this.service.settotalfare(usercount);
    this.service.setnoofseats(usercount);
    this.router.navigate(['mytickets'])
    /* this.router.navigate(['mytickets']) */
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
