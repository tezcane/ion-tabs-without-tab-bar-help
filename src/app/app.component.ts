import {Component   } from "@angular/core";
import {Platform    } from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";

import {Log         } from "../utils/log";

@Component({
  selector: "app",
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})

export class MyApp {

  private readonly PAGE_MENU: string = "PageMenu";

  protected rootPage: string;

  constructor(platform:     Platform,
              splashScreen: SplashScreen) {
    Log.trac("HELLO!", "constructor", "MyApp");

    platform.ready().then(() => {
      splashScreen.hide();

      Log.trac("Loading "+this.PAGE_MENU);
      this.rootPage =     this.PAGE_MENU;
    });
  }
}
