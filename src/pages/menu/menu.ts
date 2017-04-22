import {Component,ViewChild } from "@angular/core";
import {IonicPage,Nav,Events} from "ionic-angular";

import {Log} from "../../utils/log";

@IonicPage()
@Component({
  selector:    "app",
  templateUrl: "menu.html",
})
export class PageMenu {
  @ViewChild("content") nav: Nav;

  protected readonly PAGE_HOME:     string = "PageHome";
  protected readonly PAGE_NEWS:     string = "PageNews";        //tabIdx 0 (this is the root, not on menu)
  protected readonly PAGE_SETTINGS: string = "PageSettings";    //tabIdx 1 (On menu)
  protected readonly PAGE_CONTACT:  string = "PageContact";     //tabIdx 2 (On menu)

  protected menuRoot:  string = this.PAGE_HOME; //sets menu's default page
  private   activeTab: string = this.menuRoot;

  protected readonly menuButtons = [
    { pageName: this.PAGE_SETTINGS, tabIdx: 1, color: "text1", label: "Settings", icon: "settings"},
    { pageName: this.PAGE_CONTACT,  tabIdx: 2, color: "text2", label: "Contact",  icon: "megaphone"}
  ];

  constructor(private events: Events) {
    Log.trac("Hello!", "constructor", "PageMenu");
  }

  protected clickedOpenPage(page: string, tabIdx: number): void {
    this.activeTab = page;
    this.events.publish("menu:change", tabIdx);
  }

  protected isActiveTab(page: string): boolean {
    return this.activeTab == page;
  }
}
