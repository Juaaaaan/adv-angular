import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { NopagefoundComponent } from '../pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'grafica1', component: Grafica1Component },
  { path: '', redirectTo:'/dashboard', pathMatch:'full' },
  { path: '**', component:NopagefoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
