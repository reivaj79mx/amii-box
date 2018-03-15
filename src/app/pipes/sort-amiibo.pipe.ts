import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

import { Amiibo } from '../models/amiibo.model';

@Pipe({
  name: 'sort'
})
export class SortAmiiboPipe implements PipeTransform {

  transform(items: Amiibo[]): Amiibo[] {
    const result = _.sortBy(items, el => {
      return el.date;
    });

    return result;
  }

}

