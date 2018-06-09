import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  index: number;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.recipe = this.recipesService.getRecipe(this.index);
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipesService.getRecipe(params['id']);
        this.index = params['id'];
      }
    );
  }

  addToShoppingList() {
    this.recipesService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onDelete() {
    this.recipesService.removeRecipe(this.index);
    this.router.navigate(['recipes']);
  }
}
