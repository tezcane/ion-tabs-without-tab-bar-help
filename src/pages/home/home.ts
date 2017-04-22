import {Component,ViewChild                 } from "@angular/core";
import {IonicPage,Events,MenuController,Tabs} from "ionic-angular";

import {Log} from "../../utils/log";

@IonicPage()
@Component({
  selector: "home",
  template: `
<!--NO HEADER ON PURPOSE-->
<ion-content> 
  <ion-tabs #menuTabs><!-- href="#/tab/whatever" on-deselect="clearHistory()  tabsLayout="icon-hide, title-hide">-->
    <ion-tab [root]="PAGE_NEWS"     tabTitle="I"   ></ion-tab><!-- NOTE: NOT on menu on purpose -->
    <ion-tab [root]="PAGE_SETTINGS" tabTitle="WONT"></ion-tab>
    <ion-tab [root]="PAGE_CONTACT"  tabTitle="SHOW"></ion-tab>
  </ion-tabs>
</ion-content>`
})
export class PageHome {
  @ViewChild("menuTabs")
  protected tabRef: Tabs;
  protected tabIdx: number = 0;

  protected readonly PAGE_NEWS:     string = "PageNews";
  protected readonly PAGE_SETTINGS: string = "PageSettings";
  protected readonly PAGE_CONTACT:  string = "PageContact";

  constructor(private events:   Events,
              private menuCtrl: MenuController) {
    Log.trac("HELLO!", "constructor", "PageHome");
  }

  ngOnInit() {
    this.events.subscribe('menu:change', (tabIdx: number) => {
      if(this.tabIdx == tabIdx) {
        Log.dbg1("Already on tabIdx "+tabIdx);
      } else if(this.tabIdx != tabIdx) {
        Log.dbg1("Navigating from tabIdx "+this.tabIdx+" to tabIdx "+tabIdx);
        this.tabIdx = tabIdx;
        this.tabRef.select(this.tabIdx);
      }
      //Anytime a user selects a menu button we close the menu
      this.menuCtrl.close().then(() => {});
    });
  }
}
