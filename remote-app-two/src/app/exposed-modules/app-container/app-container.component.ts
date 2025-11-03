import { Component, OnInit, Inject} from "@angular/core";
import { UserService } from "@NickStitely/my-lib";

@Component({
    standalone: false,
    selector: "app-container",
    templateUrl: "app-container.component.html",
    styleUrl: "app-container.component.scss"
})

export class AppContainerComponent implements OnInit {
    public constructor(@Inject(UserService) public userService: UserService){

    }

    public ngOnInit(): void {
        console.log("Loaded Remote App One Remote App Container");
    }
}