import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { HomeComponent } from './components/home/home.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {WomanComponent} from "./components/woman/woman.component";
import {DressComponent} from "./components/woman/dress/dress.component";
import {MatCardModule} from "@angular/material/card";
import {TrousersComponent} from "./components/woman/trousers/trousers.component";
import {TshirtComponent} from "./components/woman/t-shirt/tshirt.component";
import {ShoesComponent} from "./components/woman/shoes/shoes.component";
import {MenComponent} from "./components/men/men.component";
import {LoginComponent} from "./components/login/login.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {ShoppingComponent} from "./components/shopping/shopping.component";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";

const routes: Routes= [{
  path:'home',
  component: HomeComponent
},
  {
    path:'login',
    component: LoginComponent
  },
  {path:'men', component: MenComponent},
  {path: 'woman', component: WomanComponent},
  {path: 'carrito', component: ShoppingComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WomanComponent,
    DressComponent,
    TrousersComponent,
    TshirtComponent,
    ShoesComponent,
    MenComponent,
    LoginComponent,
    ShoppingComponent,
    FooterComponent,
    HeaderComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatDividerModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatChipsModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
