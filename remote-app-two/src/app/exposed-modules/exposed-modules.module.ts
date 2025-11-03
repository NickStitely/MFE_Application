import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyLibModule } from '@NickStitely/my-lib';
import { AppContainerComponent } from './app-container/app-container.component';
import { DateEntryOne } from './date-entry-one/date-entry-one';
import { exposedRoutes } from './exposed-routes.routes';

@NgModule({
  declarations: [AppContainerComponent, DateEntryOne],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(exposedRoutes),
    MyLibModule
  ],
  exports: [AppContainerComponent, DateEntryOne]
})
export class ExposedModulesModule{}