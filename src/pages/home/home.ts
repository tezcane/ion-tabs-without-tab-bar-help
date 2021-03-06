import {Component,ViewChild  } from "@angular/core";
import {IonicPage,Events,Tabs} from "ionic-angular";

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
  private tabRef: Tabs;

  protected readonly PAGE_NEWS:     string = "PageNews";     //tabIdx 0 (not on menu)
  protected readonly PAGE_SETTINGS: string = "PageSettings"; //tabIdx 1
  protected readonly PAGE_CONTACT:  string = "PageContact";  //tabIdx 2

  protected tabIdx: number = 0; //PAGE_NEWS is the default tab

  constructor(private events: Events) {
    Log.trac("HELLO!", "constructor", "PageHome");
  }

  ngOnInit() {
    this.events.subscribe('menu:change', (tabIdx: number) => {
      //don't do extra work plus without this would re-construct current selected tab
      if(this.tabIdx == tabIdx) {
        if(this.tabRef.selectedIndex == tabIdx) { //I SAW IT NOT CHANGE THE TAB ONCE, SO WART
          Log.dbg1("Tab is already set tabIdx " + tabIdx);
          return;
        } else {
          Log.errr(`Expected tabRef.selectedIndex ${Log.q(this.tabRef.selectedIndex)} to equal tabIdx ${Log.q(tabIdx)}, forcing switch to ${tabIdx}`);
        }
      }
      Log.dbg1("Navigating from tabIdx "+this.tabIdx+" to tabIdx "+tabIdx);
      this.tabIdx = tabIdx;
      this.tabRef.select(this.tabIdx);
    });
  }
}
