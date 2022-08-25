import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Service } from '../payment.service';
import {Accounts} from './Accounts';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  public account: Accounts[];



  constructor(private accountService: Service){

  }
  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'accountNo',
    value: 'Account Number',

  }, {
    id: 'currentBalance',
    value: 'Current Balance',

}, {
    id: 'emailId',
    value: 'Email Id',
    
}, {
  id: 'name',
  value: 'Name',
  
}];



  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }



  public createTable() {
    this.accountService.getAccounts().subscribe(
      (response: Accounts[]) => {
        this.account = response;
        this.dataSource = new MatTableDataSource(this.account);
        console.log(this.account);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    ); 
  }

  

  refresh(): void {
    window.location.reload();
  }

  
}



