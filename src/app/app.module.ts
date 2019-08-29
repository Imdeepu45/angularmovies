import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { from } from 'rxjs';

const appRoutes:Routes=[
  {path:'',component:MovieComponent},
  {path:'search',component: SearchComponent },
  {path:'view',component:ViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SearchComponent,
    MovieComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,MovieComponent,ViewComponent,SearchComponent,NavbarComponent]
})
export class AppModule { }
