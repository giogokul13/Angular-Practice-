import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from  '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { AuthService} from 'Service/auth.service';
import {TokenInterceptorService} from 'Service/token-interceptor.service'
import {RouterguardGuard} from './routerguard.guard'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    Pagenotfound404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    

  ],
  providers: [AuthService,RouterguardGuard,
  { provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi: true
  }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
