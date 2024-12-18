import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class UsersModule { }
