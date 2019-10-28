import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavaPageComponent } from './java-page/java-page.component';
import { WebPageComponent } from './web-page/web-page.component';


const routes: Routes = [
  { path: 'web',component: WebPageComponent},
  { path: 'java',component: JavaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WebPageComponent,JavaPageComponent]
