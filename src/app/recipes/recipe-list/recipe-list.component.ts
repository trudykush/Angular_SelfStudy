import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is description', 'https://foxeslovelemons.com/wp-content/uploads/2021/09/Mashed-Potato-Cakes-Potato-Cake-Recipe-3.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
