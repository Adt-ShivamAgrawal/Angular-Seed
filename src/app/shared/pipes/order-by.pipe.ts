import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: true
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], propertyName: string, order?): any[] {
    if (propertyName) {
      if (order === -1) {
        return value.sort((a: any, b: any) => {
          return b[propertyName] - a[propertyName];
        });
      } else {
        return value.sort((a: any, b: any) => {
          return a[propertyName] - b[propertyName];
        });
      }
    }
    return value;
  }
}
