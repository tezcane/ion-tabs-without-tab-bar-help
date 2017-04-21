import {NgModule       } from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {PageSettings} from "./settings";

@NgModule({
  declarations: [PageSettings],
  imports:      [IonicPageModule.forChild(PageSettings)],
  exports:      [PageSettings]
})
export class ModulePageSettings {}
