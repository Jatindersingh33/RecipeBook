import {EventEmitter, Output} from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

export class RecipeService{

@Output() recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://ciaoflorentina.com/wp-content/uploads/2011/09/Tuna-bites.jpg'),
    new Recipe('A Test Recipe 1','This is simply a test 1 ','https://ciaoflorentina.com/wp-content/uploads/2011/09/Tuna-bites.jpg')
  ];

getRecipes(){
    return this.recipes.slice();
}



}