import {NgModule       } from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {PageHome} from "./home";

@NgModule({
  declarations: [PageHome],
  imports:      [IonicPageModule.forChild(PageHome)],
  exports:      [PageHome]
})
export class ModulePageHome {}
