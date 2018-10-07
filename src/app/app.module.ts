import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminComponent } from './componentes/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    
  ],
  imports: [
    ButtonsModule.forRoot(),
     CollapseModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
