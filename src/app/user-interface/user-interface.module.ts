import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterfaceRoutingModule } from './user-interface-routing.module';
import { UserInterfaceComponent } from './user-interface.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    UserInterfaceComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserInterfaceRoutingModule
  ]
})
export class UserInterfaceModule { }
