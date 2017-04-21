import {NgModule       } from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {PageAbout} from "./about";

@NgModule({
  declarations: [PageAbout],
  imports:      [IonicPageModule.forChild(PageAbout)],
  exports:      [PageAbout]
})
export class ModulePageAbout {}
