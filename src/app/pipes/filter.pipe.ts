import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(values: string[], args: string): string[] {
    if (!args || args?.length < 3) {
      return values;
    }

    let resultado: string[] = [];
    values.forEach((c) => {
      if (c.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1) {
        resultado = [...resultado, c];
      }
    });

    return resultado;
  }
}
