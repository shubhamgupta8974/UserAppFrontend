import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { UserpannelComponent } from './userpannel/userpannel.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserpannelComponent,
    AdminpannelComponent,
    LogincomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'admin-panel', component: AdminpannelComponent},
      {path: '', component: LogincomponentComponent},
      {path: 'user-panel', component: UserpannelComponent},
  
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
