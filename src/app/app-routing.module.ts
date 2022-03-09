import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavorisUserComponent } from './pages/favoris-user/favoris-user.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { RestoPageComponent } from './pages/resto-page/resto-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FiltersPageComponent } from './pages/filters-page/filters-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthGuard } from './services/auth.guard';
import { PageAccountComponent } from './pages/page-account/page-account.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'signin', component: SigninComponent},
    { path: 'home',canActivate: [AuthGuard], component: HomePageComponent },
    { path: 'categories',canActivate: [AuthGuard], component: ListCategoriesComponent },
    { path: 'favoris',canActivate: [AuthGuard], component: FavorisUserComponent },
    { path: 'filtres',canActivate: [AuthGuard], component: FiltersPageComponent },
    { path: 'profil',canActivate: [AuthGuard], component: PageAccountComponent },
    { path: 'Deconnexion', redirectTo: 'home'},
    {path: 'restaurants', canActivate: [AuthGuard], /*data : {ROLE : "ROLE_ADMIN"},*/ component: RestoPageComponent},
    {path: 'page-not-found',component: PageNotFoundComponent},
    {path: 'admin',canActivate: [AuthGuard], component: AdminPageComponent},
    {path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
