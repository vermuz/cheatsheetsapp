import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cheatsheet'
})
export class CheatsheetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
