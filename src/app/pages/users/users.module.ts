import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../../components/user/user.module';
import { PipesModule } from '../../pipes/pipes.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserModule,
    PipesModule,
    UsersRoutingModule,
  ],
})
export class UsersModule { }
