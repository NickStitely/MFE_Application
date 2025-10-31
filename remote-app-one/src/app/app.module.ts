import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { App } from './app';
import { routes } from './app.routes';
import { ExposedModulesModule } from './exposed-modules/exposed-modules.module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    RouterLink,
    ExposedModulesModule
  ],
  providers: [],
  bootstrap: [App],
  exports: [App]
})
export class AppModule{

}
