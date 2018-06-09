import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullnamePipe} from './pipes/fullname.pipe';
import {GroupBoxComponent} from './group-box/group-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FullnamePipe,
    GroupBoxComponent
  ],
  providers: [FullnamePipe],
  exports: [
    FullnamePipe,
    GroupBoxComponent
  ]
})
export class SharedModule { }
