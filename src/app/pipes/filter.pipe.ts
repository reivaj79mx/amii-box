import { Pipe, PipeTransform } from '@angular/core';

import { Amiibo } from '../models/amiibo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Amiibo[], filter: string): Amiibo[] {
    if (!items || !filter) {
      return items;
    }

    const result = items.filter((item: Amiibo) => item.serie === filter);

    return result;
  }

}
