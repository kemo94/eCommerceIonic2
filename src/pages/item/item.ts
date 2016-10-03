import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import { NavParams} from 'ionic/ionic';
 
import { BuyItem } from '../buy-item/buy-item';
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class Item {

    categoryName:string;
    items = [];
 
  constructor(public navCtrl: NavController , private navParams: NavParams) {
        this.categoryName = this.navParams.get("itemCategory");
        
        console.log(this.categoryName);

        for ( var i = 0 ;i < 3 ; i ++ )
          this.items.push(this.categoryName + "_" + (i+1));
        
    }

  chooseItem(itemName) {
    console.log(itemName);
    this.navCtrl.push(BuyItem, {itemName});
  }

    

}
