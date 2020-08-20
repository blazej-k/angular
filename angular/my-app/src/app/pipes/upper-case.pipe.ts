import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    if (value.charAt(0) !== ' ') {
      // tslint:disable-next-line: no-unused-expression
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    else{
      for (let i = 1; i <= value.length; i++){
        if (value.charAt(i) === ' '){
          continue;
        }
        else{
          return value.slice(0, i - 1) + value.charAt(i).toUpperCase() + value.slice(i + 1);
        }
      }
    }
  }
}
