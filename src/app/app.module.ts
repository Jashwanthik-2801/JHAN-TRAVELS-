import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RouterModule,Routes} from '@angular/router';
import { ShowbusesComponent } from './showbuses/showbuses.component';
import { AddbusComponent } from './addbus/addbus.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SeatselComponent } from './seatsel/seatsel.component';
import { SearchbusesComponent } from './searchbuses/searchbuses.component';
import { TicketComponent } from './ticket/ticket.component';
import { MyticketsComponent } from './mytickets/mytickets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Seatsel2Component } from './seatsel2/seatsel2.component';
import { Seatsel3Component } from './seatsel3/seatsel3.component';
import { PassticketsComponent } from './passtickets/passtickets.component';
import { BaggageComponent } from './baggage/baggage.component';
import { BaggagelistComponent } from './baggagelist/baggagelist.component';
import { NonuserhomeComponent } from './nonuserhome/nonuserhome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const appRoot: Routes = [  {path:'',component:HomepageComponent},

                         {path:'common',component:AppComponent},
                         {path:'adminhome',canActivate: [AuthGuard],component:AdminhomeComponent},
                         {path: 'login', component:LoginComponent},
                         {path: 'register',  component:RegisterComponent},
                         {path: 'showbuses', canActivate: [AuthGuard], component:ShowbusesComponent},
                         {path: 'addbus', canActivate: [AuthGuard], component: AddbusComponent},
                         {path:'homepage',component:HomepageComponent},
                         {path:'seatsel',component:SeatselComponent},
                         {path:'searchbuses',component: SearchbusesComponent},
                         {path:'reserveticket',component:  TicketComponent},
                         {path:'seatsel2',component:  Seatsel2Component},
                         {path:'mytickets',component:  MyticketsComponent},
                         {path:'seatsel3',component:  Seatsel3Component},
                         {path:'passtickets',component:  PassticketsComponent},
                         {path:'baggage',component:  BaggageComponent},
                         {path:'baggagelist',component: BaggagelistComponent},
                         {path: 'nonuserhome', component: NonuserhomeComponent },
                         {path: 'aboutus', component:AboutusComponent}
                        ];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    ShowbusesComponent,
    AddbusComponent,
    HomeComponent,
    AdminhomeComponent,
    HomepageComponent,
    SeatselComponent,
    SearchbusesComponent,
    TicketComponent,
    MyticketsComponent,
    Seatsel2Component,
    Seatsel3Component,
    PassticketsComponent,
    BaggageComponent,
    BaggagelistComponent,
    NonuserhomeComponent,
    AboutusComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,RouterModule.forRoot(appRoot), MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
