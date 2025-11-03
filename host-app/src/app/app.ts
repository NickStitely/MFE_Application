import { Component, signal, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '@NickStitely/my-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('host-app');

  public constructor(@Inject(UserService) public userService: UserService){

  }

  toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu?.classList.toggle('expanded');
  }
}
