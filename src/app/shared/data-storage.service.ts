import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipesService} from '../recipes/recipes.service';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipesService: RecipesService,
    private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.token;
    return this.http.put('https://ng-recipe-book-d2666.firebaseio.com/recipes.json?auth=' + token,
      this.recipesService.getRecipes());
  }

  fetchRecipes() {
    const token = this.authService.token;
    return this.http.get('https://ng-recipe-book-d2666.firebaseio.com/recipes.json?auth=' + token)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = null;
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipesService.setRecipes(recipes);
      }
    );
  }
}
