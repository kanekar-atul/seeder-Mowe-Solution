import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()

export class DataService {
    getProducts(): IProduct[] {
        return [
            {
            'productId': 255,
            'productName': 'Hammer',
            'productCode': '25das',
            'releaseDate': 'March 25, 2018',
            'description': 'lorem Ipsum',
            'price': 250,
            'raiting': 3
          },
          {
            'productId': 20,
            'productName': 'Coat',
            'productCode': '85das',
            'releaseDate': 'March 30, 2018',
            'description': 'lorem Ipsum',
            'price': 1000,
            'raiting': 5
        }];
    }
}

