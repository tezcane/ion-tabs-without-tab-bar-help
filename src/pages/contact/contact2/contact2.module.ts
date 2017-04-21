import {NgModule       } from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {PageContact2} from "./contact2";

@NgModule({
  declarations: [PageContact2],
  imports:      [IonicPageModule.forChild(PageContact2)],
  exports:      [PageContact2]
})
export class ModulePageContact {}
