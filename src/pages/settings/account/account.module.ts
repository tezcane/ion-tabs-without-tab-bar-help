import {NgModule       } from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {PageAccount} from "./account";

@NgModule({
  declarations: [PageAccount],
  imports:      [IonicPageModule.forChild(PageAccount)],
  exports:      [PageAccount]
})
export class ModulePageAccount {}
