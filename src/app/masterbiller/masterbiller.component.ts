

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import {Service } from '../payment.service';
import {Biller} from './Biller';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-masterbiller',
  templateUrl: './masterbiller.component.html',
  styleUrls: ['./masterbiller.component.css']
})
export class MasterbillerComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  public biller: Biller[];



  constructor(private billerService: Service){

  }
  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'billerCode',
    value: 'Biller Code',

  }, {
    id: 'name',
    value: 'Name',
}];



  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }



  public createTable() {
    this.billerService.getBiller().subscribe(
      (response: Biller[]) => {
        this.biller = response;
        this.dataSource = new MatTableDataSource(this.biller);
        console.log(this.biller);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    ); 
  }

  public onAddBiller(addForm: NgForm): void {
    document.getElementById('add-biller-form').click();
    this.billerService.addBiller(addForm.value).subscribe(
      (response: Biller) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(this.biller);
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


  public onOpenModal(biller: Biller, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addBillerModal');
    }
    container.appendChild(button);
    button.click();
  }

  
}


