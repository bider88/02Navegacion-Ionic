import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {
  }

  user: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  enablePrincipal() {
    this.navCtrl.parent.select(2);
  }

  showModal() {
    const modal = this.modalCtrl.create(ModalPage, { user: { name: 'Irving', age: 29 } });
    modal.present();
    modal.onDidDismiss(param => {
      if (param) {
        this.user = param;
      }
    })
  }

}
