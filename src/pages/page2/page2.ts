import { Page3Page } from './../page3/page3';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  page3: any = Page3Page;
  mutants: any[] = [
    {
      name: 'Magneto',
      power: 'Controlar metales'
    },
    {
      name: 'Wolwerine',
      power: 'Regeneración'
    },
    {
      name: 'Profesor X',
      power: 'Control mental'
    },
    {
      name: 'Gambito',
      power: 'Controlar y cargar cosas con energía'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(mutan: any) {
    this.navCtrl.push(Page3Page, { mutan });
  }

}
