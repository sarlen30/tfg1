import {Component, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {HttpClient} from "@angular/common/http";

export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomanComponent {

  dress :boolean = false;
  pic : boolean = true;
  trousers: boolean = false;
  tshirt:boolean = false;
  shoes: boolean = false;

dress1(): void {
  this.dress=true;
  this.shoes=false;
  this.tshirt=false;
  this.trousers=false;
  this.pic = false;
}

trousers1(): void{
 this.dress=false;
 this.shoes=false;
 this.pic=false;
  this.tshirt=false;
  this.trousers=true;
}

tshirt1():void{
  this.dress=false;
  this.shoes=false;
  this.pic=false;
  this.trousers=false;
  this.tshirt=true;
}

shoes1():void {
  this.dress=false;
  this.pic=false;
  this.trousers=false;
  this.tshirt=false;
  this.shoes=true;
}



}
