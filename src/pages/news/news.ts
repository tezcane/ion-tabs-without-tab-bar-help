import {Component               } from "@angular/core";
import {IonicPage,MenuController} from "ionic-angular";

import {Log} from "../../utils/log";

@IonicPage()
@Component({
  selector:    "news",
  template: `
<ion-header>
  <ion-navbar color="backgroundHeader">
    <ion-title>NEWS</ion-title>
    <button ion-button menuToggle right>
      <ion-icon name="menu"></ion-icon>
    </button>
  </ion-navbar>
</ion-header>

<ion-content no-padding>
  <br>
  <br>
  <h6><-Pull menu out from left anytime</h6>
  <br>
  <br>
  <p ion-text
     color="text1"
     style="text-align: center; margin-top: 15%; font-size: 16px;">
    HOME PAGE
  </p>
</ion-content>`
})
export class PageNews {
  constructor(private menuCtrl: MenuController) {
    Log.trac("HELLO!", "constructor", "PageNews");
  }

  /** Called any time page comes into view */
  ionViewWillEnter() {
    this.menuCtrl.open().then(() => {});
  }
}