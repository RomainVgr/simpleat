import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavorisUserComponent } from './pages/favoris-user/favoris-user.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'categories', component: ListCategoriesComponent },
    { path: 'favoris', component: FavorisUserComponent },
    { path: 'Deconnexion', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
