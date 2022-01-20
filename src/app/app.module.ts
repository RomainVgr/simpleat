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


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    CardCategoryComponent,
    CardRestoComponent,
    FooterComponent,
    HomePageComponent,
    ListCategoriesComponent
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
