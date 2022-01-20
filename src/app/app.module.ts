import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';
import { PriceRestoComponent } from './filter/components/price-resto/price-resto.component';
import { DistanceRestoComponent } from './filter/components/distance-resto/distance-resto.component';
import { SurPlaceAEmporterComponent } from './filter/components/sur-place-a-emporter/sur-place-a-emporter.component';
import { PmrRestoComponent } from './filter/components/pmr-resto/pmr-resto.component';
import { AvisRestoComponent } from './filter/components/avis-resto/avis-resto.component';
import { CardCategoryComponent } from './card-category/card-category.component';
import { CardRestoComponent } from './card-resto/card-resto.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RestoPageComponent } from './pages/resto-page/resto-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    PriceRestoComponent,
    DistanceRestoComponent,
    SurPlaceAEmporterComponent,
    PmrRestoComponent,
    AvisRestoComponent,
    CardCategoryComponent,
    CardRestoComponent,
    FooterComponent,
    HomePageComponent,
    RestoPageComponent,
    PageNotFoundComponent
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
