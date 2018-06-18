import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,  )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
