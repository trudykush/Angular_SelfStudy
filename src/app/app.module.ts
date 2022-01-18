import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
/* import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component'; */
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }









/*
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';


 import { AppComponent } from './app.component';
 import { HeaderComponent } from './header/header.component';
 import { RecipesComponent } from './recipes/recipes.component';
 import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
 import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
 import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
 import { ShoppingListComponent } from './shopping-list/shopping-list.component';
 import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

 @NgModule({
   declarations: [
     AppComponent,
     HeaderComponent,
     RecipesComponent,
     RecipeListComponent,
     RecipeDetailComponent,
     RecipeItemComponent,
     ShoppingListComponent,
     ShoppingEditComponent
     AppComponent
   ],
   imports: [
     BrowserModule,
     FormsModule
     FormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }


 */
