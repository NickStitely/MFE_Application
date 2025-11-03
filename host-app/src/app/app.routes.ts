import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { TestPageComponent } from './test-page/test-page.component';
import { App } from './app';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'test-page',
    component: TestPageComponent
  },
  {
    path: 'remote-app-one',
    loadChildren: () => 
      loadRemoteModule({
        remoteName: 'remote-app-one',
        exposedModule: './ExposedModules',
      })
      .then(m => m.ExposedModulesModule)
  },
  {
    path: 'remote-app-two',
    loadChildren: () => 
      loadRemoteModule({
        remoteName: 'remote-app-two',
        exposedModule: './ExposedModules',
      })
      .then(m => m.ExposedModulesModule)
  }
];
