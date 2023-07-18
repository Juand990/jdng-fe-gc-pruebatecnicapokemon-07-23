import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { PokemondetailComponent } from './components/pokemondetail/pokemondetail.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent,...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent,...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  { path: 'pokemons', component: PokemonlistComponent,...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  { path: 'detail', component: PokemondetailComponent,...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  { path: '', pathMatch:'full',redirectTo:'/home'},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
