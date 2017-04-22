//Angular/Ionic:
import {NgModule,ErrorHandler                 } from "@angular/core";
import {ReactiveFormsModule                   } from "@angular/forms";
import {BrowserModule                         } from "@angular/platform-browser";
import {HttpModule                            } from "@angular/http";
import {IonicApp,IonicModule,IonicErrorHandler} from "ionic-angular";
import {StatusBar                             } from "@ionic-native/status-bar";
import {SplashScreen                          } from "@ionic-native/splash-screen";
import {Keyboard                              } from "@ionic-native/keyboard";
//Components:
import {MyApp} from "./app.component";
//Utility classes:
import {Log  } from "../utils/log";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
  //IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true}), //TODO This gets rid of Bar on child tabs, but causes the Tab Switch behavior to break
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule //TODO what does this do?
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, //TODO remove in production?
    StatusBar,
    SplashScreen,
    Keyboard
  ]
})

export class AppModule {
  constructor() {
    Log.trac("HELLO @NgModule!", "constructor", "AppModule");
  }
}
