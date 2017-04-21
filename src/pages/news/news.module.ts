import {NgModule       } from "@angular/core";
import {IonicPageModule} from "ionic-angular";

import {PageNews} from "./news";

@NgModule({
  declarations: [PageNews],
  imports:      [IonicPageModule.forChild(PageNews)],
  exports:      [PageNews]
})
export class ModulePageNews {}
