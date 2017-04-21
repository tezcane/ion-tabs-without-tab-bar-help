import {Component              } from "@angular/core";
import {IonicPage,NavController} from "ionic-angular";

import {PageHome} from "../home/home";

import {Log     } from "../../utils/log";

@IonicPage()
@Component({
  selector:  "settings",
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
    <ion-title>SETTINGS</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>
    
    <div style="margin-top: 20vw;"></div>

    <ion-list-header>
      <span ion-text color="text3">App Setup</span>
    </ion-list-header>

    <button ion-item
            (click)="clickedOpenPage(PAGE_ACCOUNT)"
            color="text1">
      Account
    </button>

    <ion-list-header>
      <span ion-text color="text3">View</span>
    </ion-list-header>

    <button ion-item
            (click)="clickedOpenPage(PAGE_ABOUT)"
            color="text2">
      About
    </button>

  </ion-list>
</ion-content>`
})
export class PageSettings {
  protected readonly PAGE_ACCOUNT: string = "PageAccount";
  protected readonly PAGE_ABOUT:   string = "PageAbout";

  constructor(private navCtrl: NavController) {
    Log.trac("HELLO!", "constructor", "PageSettings");
  }

  protected clickedOpenPage(page: string): void {
    this.navCtrl.push(page).then(() => {});
  }

  protected clickedBackButton() {
    PageHome.goToRootTab();
  }
}
