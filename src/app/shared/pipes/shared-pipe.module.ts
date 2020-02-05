import { NgModule } from '@angular/core';
import { YyyymmToDatePipe } from './yyyymm-to-date.pipe';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    YyyymmToDatePipe,
    OrderByPipe,
  ],
  imports: [CommonModule],
  exports: [
    YyyymmToDatePipe,
    OrderByPipe,
  ]
})
export class SharedPipeModule {}
