import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { formatDate, CommonModule } from '@angular/common';

@Pipe({
  name: 'yyyymmToDate'
})
export class YyyymmToDatePipe implements PipeTransform {
  transform(data: any, ...args: any[]): any {
    let inputDate = JSON.parse(JSON.stringify(data || ''));
    const format = args[0] || 'MMM-yyyy';
    const locale = args[1] || 'en-US';
    inputDate = inputDate.toString();
    const year = inputDate.slice(0, 4);
    // month range is 0-11 (jan-dec)
    const month = inputDate.slice(4, 6) - 1;
    let day = inputDate.slice(6, 8);
    if (!day) {
      day = '01';
    }
    const dateObj = new Date(year, month, day);
    return formatDate(dateObj, format, locale);
  }
}
