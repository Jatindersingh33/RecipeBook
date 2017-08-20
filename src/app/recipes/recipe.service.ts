import {EventEmitter, Output, Injectable} from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{

@Output() recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe(
        'Chicken Tikka',
        'Chicken tikka is a chicken dish originating in the Punjab region of the Indian Subcontinent; the dish is popular in India and Pakistan.',
        'http://indianhealthyrecipes.com/wp-content/uploads/2013/02/chicken-tikka-recipe-step-6.jpg',
        [
            new Ingredient('Chicken',15),
            new Ingredient('Tomatoes',4),
            new Ingredient('Onion',5),
        ]),
    new Recipe(
        'Butter Chicken',
        'Butter chicken or murgh makhani is a dish from the Indian subcontinent of chicken in a mildly spiced curry sauce.',
        'https://i.ytimg.com/vi/a03U45jFxOI/maxresdefault.jpg',
        [
            new Ingredient('chicken',15),
            new Ingredient('Cream',1),
            new Ingredient('Onion',5),
            new Ingredient('Tomatoes',8),
        ]
    )
  ];

  constructor(private slService: ShoppingListService ){

  }

getRecipes(){
    return this.recipes.slice();
}

addIngredientToShoppingList(ingredients : Ingredient[]){
this.slService.addIngredients(ingredients);
}

}