import {NgModule} from "@angular/core";
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./home/main/main.component";
import {StartComponent} from "./home/start/start.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
      { path: '', component: StartComponent},
      { path: ':id', component: MainComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
