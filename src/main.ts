import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app/app-routing';

export const routes: Routes = [];

bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled'
    })),
  ]
})