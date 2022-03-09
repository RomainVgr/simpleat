import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';
import { CardCategoryComponent } from './card-category/card-category.component';
import { CardRestoComponent } from './card-resto/card-resto.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RestoPageComponent } from './pages/resto-page/resto-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FiltersPageComponent } from './pages/filters-page/filters-page.component';
import { AvisBarComponent } from './filters/avis-bar/avis-bar.component';
import { IconComponent } from './filters/icon/icon.component';
import { TemplatePageComponent } from './components/template-page/template-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AddRestauComponent } from './admin-component/add-restau/add-restau.component';
import { UpdateDelRestauComponent } from './admin-component/update-del-restau/update-del-restau.component';
import { HeaderLogoComponent } from './header/components/header-logo/header-logo.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { FavorisUserComponent } from './pages/favoris-user/favoris-user.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PageAccountComponent } from './pages/page-account/page-account.component';
import { PageAccesDeniedComponent } from './pages/page-acces-denied/page-acces-denied.component';

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
    IconComponent,
    SigninComponent,
    TemplatePageComponent,
    AdminPageComponent,
    AddRestauComponent,
    UpdateDelRestauComponent,
    HeaderLogoComponent,
    FavorisUserComponent,
    SignupComponent,
    PageAccountComponent,
    PageAccesDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
