import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from './product';

@Pipe ({
    name: 'search'
})

export class SearchPipe implements PipeTransform {

    transform(value: IProduct[], search: string): IProduct[] {
        search = search ? search.toLowerCase() : null;
        return search ? value.filter((product: IProduct) =>
            product.productName.toLowerCase().indexOf(search) !== -1) : value;
    }
}
