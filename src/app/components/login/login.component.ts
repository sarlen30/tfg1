import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/LoginService";
import {Component} from "@angular/core";
import {Usuario} from "../../models/Usuario";
import {AuthService} from "../../services/AuthService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
newUser;
login;
isNewUser:boolean= false;
isLogin:boolean=false;
home:boolean=false;
welcome:boolean=false;
  mensajeBienvenida: string = '';
  mensajeCreado:string =' ';


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService : LoginService,
              private authService: AuthService) {
    this.newUser =this.formBuilder.group({
        nombre: '',
      apellidos: '',
      telefono:'',
      direccion: '',
      email: '',
      pago: '',
      contraseña: '',
      }
    )
    this.login =this.formBuilder.group({
        nombre: '',
    contraseña:'',
      }
    )

  }


create(): void {
  if (this.newUser)
  {
  const usuario: Usuario = {
    nombre: this.newUser.get('nombre')?.value || '',
    email: this.newUser.get('email')?.value|| '',
    password: this.newUser.get('contraseña')?.value||'',
    direccion:this.newUser.get('direccion')?.value || ''}

    this.loginService.create(usuario).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente', response);
        if (this.newUser) {
          this.newUser.reset();
          this.mensajeCreado = '¡Usuario creado con exito!';

        }
      },
      (error) => {
        console.error('Error al crear usuario', error);
      }
    );}}

  loginUser(): void {
    if (this.login) {
      this.loginService.login(this.login.get('nombre')?.value || '').subscribe(
        (response) => {
          console.log('bienvenido');
          if (this.newUser) {
            const idUsuario = response.id ;
            this.authService.setIdUsuario(idUsuario!);
            this.login.reset();
            this.authService.login();
            this.mensajeBienvenida = '¡Bienvenido!';
       }
        },
        (error) => {
          console.error('Login Error', error);
        }
      );
    }
  }
}
