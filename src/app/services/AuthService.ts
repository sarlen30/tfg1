import { Injectable } from '@angular/core';
import {Usuario} from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() { }

  login(): void {
    this.loggedIn = true;
  }
  isLoggedIn(): boolean {

    return this.loggedIn;
  }

  private nombreUsuario: string | null = null;
  private id: any ;



  setIdUsuario(id: number): void {
    this.id = id;
  }

  getIdUsuario(): number {
    return this.id;
  }



}
