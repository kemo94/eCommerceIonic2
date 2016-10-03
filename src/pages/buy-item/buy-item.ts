import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';

/*
  Generated class for the BuyItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buy-item',
  templateUrl: 'buy-item.html'
})
export class BuyItem {

    itemName:string;
  constructor(public navCtrl: NavController , private navParams: NavParams) {
      this.itemName = this.navParams.get("itemName");
       
  }
  buy(){
      alert("You purchased " + this.itemName + " successfully");
  }

}
