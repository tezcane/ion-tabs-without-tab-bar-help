import {NgModule       } from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {PageContact} from "./contact";

@NgModule({
  declarations: [PageContact],
  imports:      [IonicPageModule.forChild(PageContact)],
  exports:      [PageContact]
})
export class ModulePageContact {}
