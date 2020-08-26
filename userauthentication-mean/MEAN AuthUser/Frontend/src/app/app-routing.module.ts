import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { RegisterComponent } from './register/register.component';
import {RouterguardGuard} from './routerguard.guard'
const routes: Routes = [
  { path:'', redirectTo:'/login',pathMatch:'full' },

  { path:'login', component:LoginComponent },
  { path:'register',component:RegisterComponent },

  { path:'dashboard', component:DashboardComponent , canActivate: [RouterguardGuard] },

  { path:'**' ,component: Pagenotfound404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
