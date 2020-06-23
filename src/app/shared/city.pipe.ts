import { Pipe, PipeTransform } from '@angular/core';

export type CityFormat = 'short' | 'long';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: CityFormat, lang: string): string {
    
    let short, long;

    switch(value) {
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Helmut Schmidt';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Frankfurt':
        short = 'FRA';
        long = 'Airport Frankfurt';
      default:
        short = long = value;
    }

    if (fmt === 'short') {
      return short;
    }
    else {
      return long;
    }


  }

}
