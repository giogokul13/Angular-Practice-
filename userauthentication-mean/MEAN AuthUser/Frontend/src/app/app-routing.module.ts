import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'register',component:RegisterComponent },

  { path:'dashboard', component:DashboardComponent },

  { path:'**' ,component: Pagenotfound404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
