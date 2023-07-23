import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { SpComponent } from './pages/sp/sp.component';
import { NavComponent } from './pages/nav/nav.component';

import { SigninComponent } from './pages/signin/signin.component';
const routes: Routes = [
  {path:'',component:SpComponent},
  {path:'search',component:SearchComponent},
  {path:'login',component:LoginComponent},
  {path:'singup',component:SingupComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'sp',component:SpComponent},
  {path:'signin',component:SigninComponent},
  {path:'nav',component:NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
