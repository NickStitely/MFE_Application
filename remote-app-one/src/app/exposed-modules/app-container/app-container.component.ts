import { Component, OnInit } from "@angular/core";

@Component({
    standalone: false,
    selector: "app-container",
    templateUrl: "app-container.component.html"
})

export class AppContainerComponent implements OnInit {
    public constructor(){

    }

    public ngOnInit(): void {
        console.log("Loaded Remote App One Remote App Container");
    }
}