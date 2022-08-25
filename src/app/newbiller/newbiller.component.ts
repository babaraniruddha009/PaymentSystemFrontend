import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import {Service } from '../payment.service';
import {Bill} from './Bill';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newbiller',
  templateUrl: './newbiller.component.html',
  styleUrls: ['./newbiller.component.css']
})

export class NewbillerComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  public bill: Bill[];



  constructor(private billService: Service){

  }
  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'sequenceId',
    value: 'Sequence Number',
  }, {
    id: 'amount',
    value: 'Amount',
  },{
    id: 'consumerNumber',
    value: 'Consumer Number',
},{
  id: 'dueDate',
  value: 'Due Date',

}, {
  id: 'status',
  value: 'Status',
}, {
  id: 'billerCode',
  value: 'Biller Code',

},{
  id: 'accountNo',
  value: 'Account Number',

}];



  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }



  public createTable() {
    this.billService.getBill().subscribe(
      (response: Bill[]) => {
        this.bill = response;
        
        this.dataSource = new MatTableDataSource(this.bill);
        console.log(this.bill);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    ); 
  }

  public onAddBill(addForm: NgForm): void {
    document.getElementById('add-bill-form').click();
    this.billService.addBill(addForm.value).subscribe(
      (response: Bill) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(this.bill);
        this.refresh();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  refresh(): void {
    window.location.reload();
}


  public onOpenModal(bill: Bill, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addBillModal');
    }
    container.appendChild(button);
    button.click();
  }

  
}


