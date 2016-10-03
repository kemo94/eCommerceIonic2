import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Item } from '../item/item';
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class Category {

  constructor(public navCtrl: NavController) {

  }

  chooseCategory(itemCategory) {
    console.log(itemCategory);
    this.navCtrl.push(Item, {itemCategory});
  }

}
