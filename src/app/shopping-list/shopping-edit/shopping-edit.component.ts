import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        });
      });
  }

  onSubmit() {
    const newIngredient = new Ingredient(this.form.value.name, this.form.value.amount);
    if(this.editMode) {
      this.shoppingListService.editIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.form.reset();
    this.editMode = false;
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppingListService.removeIngredient(this.editItemIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
