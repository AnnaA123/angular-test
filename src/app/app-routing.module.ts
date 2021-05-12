import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TodopageComponent } from './components/pages/todopage/todopage.component';
import { TourOfHeroesComponent } from './components/pages/tour-of-heroes/tour-of-heroes.component';
import { SecondTourOfHeroesComponent } from './components/pages/second-tour-of-heroes/second-tour-of-heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
  { path: 'todos', component: TodopageComponent },
  { path: 'angulartutorial', component: TourOfHeroesComponent },
  { path: 'angulartutorial2', component: SecondTourOfHeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
