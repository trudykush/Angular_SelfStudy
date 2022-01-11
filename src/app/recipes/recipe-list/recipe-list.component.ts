import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is description',
      'https://media.istockphoto.com/photos/culinary-background-with-spices-and-recipe-book-picture-id607299402?k=20&m=607299402&s=612x612&w=0&h=kyjzviV27vVh7UpW1gj_jUm26umMdS17NJvhz4wls8s='),
      new Recipe('Second Recipe', 'This is second description',
            'https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
