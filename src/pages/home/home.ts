import {Component,ViewChild}   from "@angular/core";
import {Events,IonicPage,Tabs} from "ionic-angular";

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
  protected static tabRefStatic: Tabs;
  protected static tabIdx: number = 0;

  protected readonly PAGE_NEWS:     string = "PageNews";
  protected readonly PAGE_SETTINGS: string = "PageSettings";
  protected readonly PAGE_CONTACT:  string = "PageContact";

  constructor(private events: Events) {
    Log.trac("HELLO!", "constructor", "PageHome");
  }

  ngOnInit() {
    PageHome.tabRefStatic = this.tabRef; //make static so we can easily go to menuRoot

    this.events.subscribe('menu:change', (tabIdx: number) => {
      Log.dbg1("got tabIdx = "+tabIdx, "ngOnInit.events.subscribe", "PageHome");

      if(PageHome.tabIdx == tabIdx) {
        Log.dbg1("Already on tabIdx "+tabIdx);
      } else if(PageHome.tabIdx != tabIdx) {
        PageHome.switchTabs(tabIdx);
      }
    });
  }

  public static goToRootTab(): void {
    Log.dbg1("Changing back to rootMenu of tabIdx 0");
    PageHome.switchTabs(0);
  }

  private static switchTabs(tabIdx: number): void {
    Log.dbg1("Navigating from tabIdx "+PageHome.tabIdx+" to tabIdx "+tabIdx);
    PageHome.tabIdx = tabIdx;
    PageHome.tabRefStatic.select(PageHome.tabIdx);
  }
}
