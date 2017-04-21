import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";

import {Log} from "../../../utils/log";

@IonicPage()
@Component({
  selector: "about",
  template: `
<ion-header>
  <ion-navbar color="backgroundHeader">
    <ion-title>SETTINGS ABOUT</ion-title>
  </ion-navbar>
</ion-header>

<ion-content></ion-content>`
})
export class PageAbout {
  constructor() {
    Log.trac("HELLO!", "constructor", "PageAbout");
  }
}
