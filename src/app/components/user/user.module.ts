import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [
    CommonModule,
  ],
})
export class UserModule { }
