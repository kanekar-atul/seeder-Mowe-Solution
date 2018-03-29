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
  products: IProduct[] ;

  constructor(private _DataService: DataService) {

    }

  ngOnInit() {
    this.products = this._DataService.getProducts();
  }

  onRaitingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
