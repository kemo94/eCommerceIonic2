import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Category } from '../category/category';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    email:string;
    password:string;
  constructor(public navCtrl: NavController) { 
  }


    checklogin() {
      if ( this.email == "kemo@yahoo.com" && this.password == "123" ){
            this.navCtrl.push(Category);
    }
      else
       window.alert("wrong email or passowrd");
    }
}