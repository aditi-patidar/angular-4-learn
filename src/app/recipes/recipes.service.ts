import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe('Cup Cake', 'A sweet dish',
      'http://fondantcakeimages.com/wp-content/uploads/2016/01/strawberry_red_velvet_cupcakes_-_your_cup_of_cake.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Sugar', 2)
      ]),
    new Recipe('Pav Bhaji',
      'A delicious indian snack',
      'https://i2.wp.com/vegrecipe.in/wp-content/uploads/2016/10/Aaiye-aaj-banaye-Swadisht-Pav-Bhaji-Recipe-learn-how-to-make-Pav-Bhaji-recipe-at-home.jpg?resize=508%2C306',
      [
        new Ingredient('Bun', 10),
        new Ingredient('Potato', 3),
        new Ingredient('Tomato', 2)
      ])
  ];

  recipesUpdated = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesUpdated.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesUpdated.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdated.next(this.recipes.slice());
  }
}
