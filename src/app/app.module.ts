import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './log/log.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import FormsModule
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogvalidationComponent } from './logvalidation/logvalidation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginvalidationComponent } from './loginvalidation/loginvalidation.component';


import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    LogvalidationComponent,
    LoginvalidationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // Add FormsModule
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
