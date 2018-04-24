import { Component, ViewChild } from "@angular/core";
import { IgxDropDownComponent } from "../../lib/main";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "drop-down-sample",
    templateUrl: "./sample.component.html"
})
export class DropDownSampleComponent {
    private width = "160px";
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    itemsCount = 10;
    items: any[] = [
        // { field: "Cables" },
        // { field: "Switches", disabled: true },
        // { field: "Switches", disabled: true },
        // { field: "Batteries", disabled: true }
    ];

    constructor() {
        for (let i = 0; i < this.itemsCount; i += 1) {
            const item = { field: "Item " + i };
            if (i % 3 === 0 || i % 4 === 0) {
                item["disabled"] = true;
            }

            if (i % 5 === 0) {
                item["header"] = true;
            }
            this.items.push(item);
        }
    }

    public toggleDropDown() {
        this.igxDropDown.toggleDropDown();
    }

    onSelection(ev) {
        console.log(ev);
    }
}