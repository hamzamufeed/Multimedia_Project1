import {NgModule} from "@angular/core";
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./main/main.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: HomeComponent },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: NoPreloading, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
