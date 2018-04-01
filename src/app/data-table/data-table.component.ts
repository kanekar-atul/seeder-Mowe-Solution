import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { DataService } from './data.services';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  pageTitle: String = 'Data Table';
  search: any ;
  products: IProduct[];
  errorMessage: string;

  constructor(private _DataService: DataService) {

    }

  ngOnInit(): void {
    this._DataService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      error => this.errorMessage = <any>error
    );
  }

  onRaitingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
