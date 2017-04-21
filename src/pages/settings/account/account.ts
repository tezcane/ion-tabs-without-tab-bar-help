import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";

import {Log} from "../../../utils/log";

@IonicPage()
@Component({
  selector: "account",
  template: `
<ion-header>
  <ion-navbar color="backgroundHeader">
    <ion-title>SETTINGS ACCOUNT</ion-title>
  </ion-navbar>
</ion-header>

<ion-content></ion-content>`
})
export class PageAccount {
  constructor() {
    Log.trac("HELLO!", "constructor", "PageAccount");
  }
}
