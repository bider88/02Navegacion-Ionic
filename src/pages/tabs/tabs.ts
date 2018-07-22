import { Component } from '@angular/core';
import { PrincipalPage } from '../principal/principal';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = PrincipalPage;
    this.tab2 = SettingsPage;
  }

}
