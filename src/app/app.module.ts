import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountholderComponent } from './accountholder/accountholder.component';
import { RouterModule, Routes } from '@angular/router';
import { BankmanagerComponent } from './bankmanager/bankmanager.component';
import { MasterbillerComponent } from './masterbiller/masterbiller.component';
import { NewbillerComponent } from './newbiller/newbiller.component';

import { MatTableModule } from '@angular/material/table';
import { Service } from './payment.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { CreatebillerComponent } from './createbiller/createbiller.component';
import { AccountsComponent } from './accounts/accounts.component';



const appRoutes:Routes=[
  {
    path:'',
    component:HeaderComponent
  },
  {
    path:'accountholder',
    component:AccountholderComponent
  },
  {
    path:'bankmanager',
    component:BankmanagerComponent
  },
  {
    path:'bankmanager/masterbiller',
    component:MasterbillerComponent
  },
  {
    path:'bankmanager/accounts',
    component:AccountsComponent
  },
  {
    path:'bankmanager/bills',
    component:NewbillerComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountholderComponent,
    BankmanagerComponent,
    MasterbillerComponent,
    NewbillerComponent,
    CreatebillerComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
