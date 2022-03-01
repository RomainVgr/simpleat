import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavorisUserComponent } from './pages/favoris-user/favoris-user.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { RestoPageComponent } from './pages/resto-page/resto-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FiltersPageComponent } from './pages/filters-page/filters-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'categories', component: ListCategoriesComponent },
    { path: 'favoris', component: FavorisUserComponent },
    { path: 'filtres', component: FiltersPageComponent },
    { path: 'Deconnexion', redirectTo: 'home'},
    {path: 'restaurants', canActivate: [AuthGuard], component: RestoPageComponent},
    {path: 'page-not-found',component: PageNotFoundComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'admin', component: AdminPageComponent},
    {path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
