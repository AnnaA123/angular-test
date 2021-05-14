import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TodopageComponent } from './components/pages/todopage/todopage.component';
import { TourOfHeroesComponent } from './components/pages/tour-of-heroes/tour-of-heroes.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SecondTourOfHeroesComponent } from './components/pages/second-tour-of-heroes/second-tour-of-heroes.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { ButtonComponent } from './components/layout/button/button.component';
import { CrashCourseComponent } from './components/pages/crash-course/crash-course.component';
import { CcHeaderComponent } from './components/layout/cc-header/cc-header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodosComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    HomeComponent,
    TodopageComponent,
    TourOfHeroesComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SecondTourOfHeroesComponent,
    HeroSearchComponent,
    ButtonComponent,
    CrashCourseComponent,
    CcHeaderComponent,
    TasksComponent,
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
