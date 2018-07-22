import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  user: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeWithParams() {
    const data = { name: 'user', age: 23, coords: { lat: 10, lon: 212 } };
    this.viewCtrl.dismiss(data);
  }
  closeWithoutParams() {
    this.viewCtrl.dismiss();
  }

}
