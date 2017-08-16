import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Recipe } from './recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://ciaoflorentina.com/wp-content/uploads/2011/09/Tuna-bites.jpg'),
    new Recipe('A Test Recipe 1','This is simply a test 1 ','https://ciaoflorentina.com/wp-content/uploads/2011/09/Tuna-bites.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
