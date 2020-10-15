import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';

import { Seats } from './seatsel/Models/seats.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class PassService {
  private isUserLogged: any;
  private BusList:any;
  private selectedbus:any;
  private pass:any;
  private passname:any;
  private conseats:any;
  private doj:any;
  private seats:{};
  private ticket:any;
  private totalfare:any;
  private noofseats:any;
  private selbusprice:any;
  private baggagereq:any;
  private _seats: Array<Seats>;
  private baseUrl: String = environment.baseUrl;
  constructor(private httpClient: HttpClient,private router:Router) { 
    this.isUserLogged = false;
    this.BusList = {busNo:'',busType:'',timings:'',boardingPt:'',destination:'',seatsAvail:'',price:''};
    this.pass = {passId:'',passName:'',gender:'',age:'',email:'',mobileNo:'',address:'',loginId:'',password:''}
    this.selectedbus={busNo:'',busType:'',timings:'',boardingPt:'',destination:'',seatsAvail:'',price:''}
    this.conseats = [];
    
    
    this.ticket = {ticketNo:'',dateOfJourney:'',noOfSeats:'',totalFare:'',bus:'',passenger:''}
  }
  setUserLoggedIn(): void {
    this.isUserLogged = true;
  }
  setUserLoggedOut(): void {
    this.isUserLogged = false;
    
  }
  getUserLogged(): any {
    return this.isUserLogged;
  }
  setBusList(blist:any):void{
       this.BusList = blist;
      
  }
  getBusList():any{
    return this.BusList;
  }
  setbus(selectedbus:any):void{
    this.selectedbus = selectedbus;

  }
  getbus():any{
    return this.selectedbus;
  }
  getbusid():any{
    return this.selectedbus.busNo;
  }
  setpassid(pass:any):void{
    this.pass = pass;
  }
  getpassid():any{
    return this.pass;
  }
  getpid():any{
    return this.pass.passId;
  }
  setdoj(doj:any):void{
    this.doj = doj;
  }
  getdoj():any{
    return this.doj;
  }
  setseats(seat:[]):void{
    console.log(typeof(seat))
    this.seats = seat;
  
  }
  getseats():any{

    return this.seats;
  }
  setbaggagereqs(baggage:any){
    this.baggagereq = baggage;
    console.log(this.baggagereq);
  }
  getbaggagereqs():any{
    
    return this.baggagereq;
  }
setconseats(confirmedseats:any){
  
 
  this.conseats = confirmedseats;
  console.log(typeof( this.conseats))
  console.log(this.conseats)
}
getconseats():any{
  
  return this.conseats;
}
  /* clearseats():void{
    this.seats.forEach(element => {
      this.seats.pop();
    }); 
   
  }*/
  getnoofconseats():any{
    console.log(this.conseats)
     return this.conseats.length;
     
  }
  getselbusprice():any{
    return this.selectedbus.price;
  }
  settotalfare(usercount:any):void{
    this.totalfare = usercount*this.selectedbus.price;
  }
  gettotalfare():any{
   return this.totalfare;
   
  }
  setnoofseats(noofseats):void{
    this.noofseats = noofseats;
  }
  getnoofseats():any{
    return this.noofseats;
  }
  setpassname(name:any):void{
    this.passname = name;
    console.log(name);
  }
  getpassname():any{
    return this.passname;
  }
  setticket(ticket:any):void{
    this.ticket = ticket;
    console.log(this.ticket);
  }
  getticket():any{
     return this.ticket;
  }
  getticketid():any{
    console.log(this.ticket.ticketNo)
    return this.ticket.ticketNo;
  }
  public getAllSeats() {
    return this.httpClient.get(this.baseUrl + '/seats');
  }
  /**
   * Used to add seat details
   * @param seatNum 
   * @param isSelected 
   */
  public addSeatsDetail(seatDetails) {
    return this.httpClient.post(this.baseUrl + '/seats', seatDetails);
  }

  /**
   * Check seat status
   * @param seatNum 
   * @param isSelected 
   */


  /**
   * Used to update seat details
   * @param seatNum 
   * @param isSelected 
   */
  public toggleSeatSelect(seatNum: String) {
    this._seats.forEach((value, index) => {
      if (value.seatNum.trim() === seatNum) {
        value.isSelected = !value.isSelected;
      }
    });
  }

  /**
   * Used to confirm seat booking
   * @param seats 
   */
  public bookSeat(seats) {
    console.log(seats);
    return this.httpClient.patch(this.baseUrl + '/seats', seats);


  }
  registerEmp(passenger:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/regPass',passenger);
  }
  loginPass(login:any): any{
    return this.httpClient.post('RESTAPI/webapi/myresource/loginpass',login);
  }
  addbus(bus:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/addBus',bus);
  }
  buslist():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllBuses');
  }
  updatebus(editObject:any):any{
       return this.httpClient.put('RESTAPI/webapi/myresource/updateBus',editObject);
  }
  buslistbysd(sd:any):any{
    console.log(sd);
    return this.httpClient.get('RESTAPI/webapi/myresource/getBuses/'+sd);
  }
  reserveticket(ticket:any):any{
    return this.httpClient.post('RESTAPI/webapi/myresource/ReserveTicket',ticket);
  }
  getTickets(pid:any):any{
    console.log(pid)
    return this.httpClient.get('RESTAPI/webapi/myresource/getTickets/'+pid);
  }
  reserveseat(seat:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/reserveseat',seat);
  }
  confirmedseats(busno:any):any{
    return this.httpClient.get('RESTAPI/webapi/myresource/confirmedseats/'+busno);
  }
  cancelticket(ticket:any):any{
    return this.httpClient.delete('RESTAPI/webapi/myresource/CancelTicket/'+ticket);
  }
  getseatsbypid(pid:any):any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getSeats/'+pid)
  }
  addbaggage(baggage:any):any{
    return this.httpClient.post('RESTAPI/webapi/myresource/addBaggage',baggage)
  }
  getbaggagelist():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getBaggageList')
  }
  baggagecon(baggage:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/approvebaggage',baggage)
  }
  deletebaggage(baggageid:any):any{
    return this.httpClient.delete('RESTAPI/webapi/myresource/deletebaggage/'+baggageid)
  }

}
