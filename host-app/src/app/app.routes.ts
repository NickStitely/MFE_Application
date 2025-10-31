import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { TestPageComponent } from './test-page/test-page.component';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App
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
  }
];
