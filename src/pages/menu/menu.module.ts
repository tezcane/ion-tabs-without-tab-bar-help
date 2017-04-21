import {NgModule       } from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {PageMenu} from "./menu";

@NgModule({
  declarations:    [PageMenu],
  imports:         [IonicPageModule.forChild(PageMenu)],
  entryComponents: [PageMenu] //NOTE TODO Note using "exports" like other .modules.ts files
})
export class ModulePageMenu {}
