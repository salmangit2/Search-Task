import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        console.log(items, value);
        if (value) {
            return items.filter(item => item.title.indexOf(value) > -1);
        } else {
            return items;
        }
    }
}
