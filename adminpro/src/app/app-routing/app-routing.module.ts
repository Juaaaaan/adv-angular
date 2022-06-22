import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from '../auth/auth.routing';
import { NopagefoundComponent } from '../nopagefound/nopagefound.component';
import { PagesRoutingModule } from '../pages/pages.routing';

const routes: Routes = [

  //path: /dashboard, PagesRoutingModule,
  //path: /auth, AuthRoutingModule
  
  { path: '', redirectTo:'/dashboard', pathMatch:'full' },
  { path: '**', component:NopagefoundComponent }
];


@NgModule({
  imports: [
   RouterModule.forRoot( routes ),
   PagesRoutingModule,
   AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
