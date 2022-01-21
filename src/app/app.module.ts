import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';
import { CardCategoryComponent } from './card-category/card-category.component';
import { CardRestoComponent } from './card-resto/card-resto.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';

import { RestoPageComponent } from './pages/resto-page/resto-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FiltersPageComponent } from './pages/filters-page/filters-page.component';
import { AvisBarComponent } from './filters/avis-bar/avis-bar.component';
import { IconComponent } from './filters/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    CardCategoryComponent,
    CardRestoComponent,
    FooterComponent,
    HomePageComponent,
    ListCategoriesComponent,
    RestoPageComponent,
    PageNotFoundComponent,
    FiltersPageComponent,
    AvisBarComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
