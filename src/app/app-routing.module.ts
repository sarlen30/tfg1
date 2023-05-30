import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {MenComponent} from "./components/men/men.component";
import {WomanComponent} from "./components/woman/woman.component";
import {ShoppingComponent} from "./components/shopping/shopping.component";
import {DressComponent} from "./components/woman/dress/dress.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'men', component: MenComponent},
  {path: 'woman', component: WomanComponent},
  {path: 'carrito', component: ShoppingComponent},
  {path: 'dress', component: DressComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
