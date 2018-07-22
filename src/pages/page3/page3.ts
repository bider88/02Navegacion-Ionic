import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  mutan: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mutan = this.navParams.get('mutan');
  }

  goToBack() {
    this.navCtrl.pop();
  }

  goToRoot() {
    this.navCtrl.popToRoot();
  }

}
