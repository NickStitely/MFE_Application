import { Routes } from "@angular/router";
import { DateEntryOne } from "./date-entry-one/date-entry-one";
import { AppContainerComponent } from "./app-container/app-container.component";

export const exposedRoutes: Routes = [
    { path: '', component: AppContainerComponent },
    { path: 'date-entry-one', component: DateEntryOne }
  ];
  