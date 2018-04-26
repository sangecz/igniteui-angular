import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IgxDropDownModule, IgxToggleModule } from "../../lib/main";
import { PageHeaderModule } from "../pageHeading/pageHeading.module";
import { DropDownSampleComponent } from "./sample.component";

@NgModule({
    declarations: [DropDownSampleComponent],
    imports: [CommonModule, PageHeaderModule, IgxToggleModule, IgxDropDownModule]
})
export class DropDownSampleModule { }