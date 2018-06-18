import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {AuthService} from '../auth/auth.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthGuard} from '../auth/auth-guard.service';
import {RecipesService} from '../recipes/recipes.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ShoppingListService, RecipesService, DataStorageService, AuthService]
})

export class CoreModule { }
