import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoaderComponent } from './custom-loader.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CustomLoaderComponent],
  imports: [
    CommonModule,
    NgbProgressbarModule
  ],
  exports: [CustomLoaderComponent]
})
export class CustomLoaderModule { }
