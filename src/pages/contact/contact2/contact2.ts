import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";

import {Log} from "../../../utils/log";

@IonicPage()
@Component({
  selector: "contact2",
  template: `
<ion-header>
  <ion-navbar color="backgroundHeader">
    <ion-title>CONTACT 2</ion-title>
  </ion-navbar>
</ion-header>

<ion-content></ion-content>`
})
export class PageContact2 {
  constructor() {
    Log.trac("HELLO!", "constructor", "PageContact2");
  }
}