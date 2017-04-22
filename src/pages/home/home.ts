import {Component,ViewChild                 } from "@angular/core";
import {IonicPage,Events,MenuController,Tabs} from "ionic-angular";

import {Log} from "../../utils/log";

@IonicPage()
@Component({
  selector: "home",
  template: `
<ion-content> <!--NO HEADER ON PURPOSE-->
  <!--PROBLEM IS HERE, I DON'T WANT THE TAB BAR TO SHOW ON ROOT PAGES-->
  <ion-tabs #menuTabs><!-- href="#/tab/whatever" on-deselect="clearHistory()  tabsLayout="icon-hide, title-hide">-->
    <ion-tab [root]="PAGE_NEWS"     tabTitle="DELETE"></ion-tab><!-- NOTE: NOT on menu on purpose -->
    <ion-tab [root]="PAGE_SETTINGS" tabTitle="THIS"  ></ion-tab>
    <ion-tab [root]="PAGE_CONTACT"  tabTitle="BAR"   ></ion-tab>
  </ion-tabs>
</ion-content>`
})
export class PageHome {
  @ViewChild("menuTabs") tabRef: Tabs;
  protected tabIdx: number = 0;

  protected readonly PAGE_NEWS:     string = "PageNews";
  protected readonly PAGE_SETTINGS: string = "PageSettings";
  protected readonly PAGE_CONTACT:  string = "PageContact";

  constructor(private events: Events,
              private menu:   MenuController) {
    Log.trac("HELLO!", "constructor", "PageHome");
  }

  ngOnInit() {
    this.events.subscribe('menu:change', (tabIdx: number) => {
      //Anytime a user selects a menu button we close the menu
      this.menu.close().then(() => {});

      if(this.tabIdx == tabIdx) {
        Log.dbg1("Already on tabIdx "+tabIdx);
      } else if(this.tabIdx != tabIdx) {
        Log.dbg1("Navigating from tabIdx "+this.tabIdx+" to tabIdx "+tabIdx);
        this.tabIdx = tabIdx;
        this.tabRef.select(this.tabIdx);
      }
    });
  }
}
