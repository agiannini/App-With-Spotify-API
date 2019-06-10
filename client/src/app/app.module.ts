import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { CategoriesComponent } from './categories/categories.component';


import { CategoryPlaylistsComponent } from './category-playlists/category-playlists.component';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { AlbumsComponent } from './albums/albums.component';
import { NewReleaseComponent } from './new-release/new-release.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'search/:term', component: SearchComponent },
  { path: 'new', component: NewReleaseComponent },
  { path: 'search/results/:id', component: ResultPageComponent },
  { path: 'category/:id', component: CategoryPlaylistsComponent, runGuardsAndResolvers: 'always', }
]
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    CategoriesComponent,
    CategoryPlaylistsComponent,
    PlaylistsComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    ResultsComponent,
    ResultPageComponent,
    AlbumsComponent,
    NewReleaseComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
  routes  )],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
