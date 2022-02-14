import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { SigninComponent } from './pages/signin/signin.component';
import { RestoPageComponent } from './pages/resto-page/resto-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
