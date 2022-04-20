import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../services/data.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(values: City[], args: string): City[] {
    if (!args || args?.length < 3) {
      return values;
    }

    let resultado: City[] = [];
    values.forEach((c) => {
      if (c.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1) {
        resultado = [...resultado, c];
      }
    });

    return resultado;
  }
}
