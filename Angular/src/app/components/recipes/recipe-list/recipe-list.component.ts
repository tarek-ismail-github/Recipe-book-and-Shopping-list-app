import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A test Recip','this is a simply test','https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1160,h_1450/k%2FPhoto%2FRecipes%2F2019-09-how-to-shrimp-alfredo%2FHT-Shrimp-Alfredo_103'),
    new Recipe('A test Recip','this is a simply test','https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1160,h_1450/k%2FPhoto%2FRecipes%2F2019-09-how-to-shrimp-alfredo%2FHT-Shrimp-Alfredo_103')

  ]; 

  constructor() { }

  ngOnInit() {
  }

}
