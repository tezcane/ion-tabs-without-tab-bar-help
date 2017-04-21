import {Component              } from "@angular/core";
import {IonicPage,NavController} from "ionic-angular";

import {PageHome} from "../home/home";

import {Log     } from "../../utils/log";


@IonicPage()
@Component({
  selector: "contact",
  template: `
<ion-header>
  <ion-navbar color="backgroundHeader">
    <ion-buttons left>
      <button ion-button
              (click)="clickedBackButton()"
              icon-only>
        <ion-icon name="arrow-back"></ion-icon>
      </button>
    </ion-buttons>
    <ion-title>CONTACT 1</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <br>
  <br>
  <button ion-item
          mode="ios"
          (click)="clickedOpenPage(PAGE_CONTACT2)">
    <span ion-text color="text2">GO TO CONTACT PAGE 2</span>
  </button>
</ion-content>`
})
export class PageContact {
  protected readonly PAGE_CONTACT2 = "PageContact2";

  constructor(private navCtrl: NavController) {
    Log.trac("HELLO!", "constructor", "PageContact");
  }

  protected clickedOpenPage(page: string): void {
    this.navCtrl.push(page).then(() => {});
  }

  protected clickedBackButton() {
    PageHome.goToRootTab();
  }
}