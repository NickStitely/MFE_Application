import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '@NickStitely/my-lib';

@Component({
    standalone: false,
    templateUrl: "home-page.html",
    styleUrl: "home-page.scss"
})
export class HomePage implements OnInit {

    //public constructor(@Inject(UserService) public userService: UserService) {
    public constructor(){
    }

    public ngOnInit(): void {
    }
}