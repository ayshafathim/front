import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './login/login.component';
import { LoginvalidationComponent } from './loginvalidation/loginvalidation.component';
import { LogvalidationComponent } from './logvalidation/logvalidation.component';

import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'log',component:LogComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'signup',component:SignupComponent},
  {path:'logvalidation',component:LogvalidationComponent},
  {path:'loginvalidation',component:LoginvalidationComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
