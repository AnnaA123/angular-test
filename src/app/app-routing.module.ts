import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TodopageComponent } from './components/pages/todopage/todopage.component';
import { TourOfHeroesComponent } from './components/pages/tour-of-heroes/tour-of-heroes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todos', component: TodopageComponent },
  { path: 'angulartutorial', component: TourOfHeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
