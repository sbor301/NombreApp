import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm: FormGroup;
    Validation_messages = {
      email: [
        { type: "required", message: "El email es obligatorio." },
        { type: "pattern", message: "El email ingresado no es valido." }
      ], 
      password: [
        { type: "required", message: "La contraseña es obligatoria." },
        { type: "pattern", message: "La contraseña debe contener al menos un número, una minúscula, una mayúscula y un símbolo." },
      ]
    }
    loginMessage: any;
    constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private navCtrl: NavController,
      private storage: Storage) {
      this.loginForm = this.formBuilder.group({
        email: new FormControl(
          "",
            Validators.compose([
            Validators.required,
            Validators.pattern(
              "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
            )
          ])
        ),
          password: new FormControl(
            "",
            Validators.compose([Validators.maxLength(12), Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)]), // Al menos un número, una minúscula, una mayúscula y un símbolo
            

          )
      })

    }

  ngOnInit() {
  }

  login(login_data: any) {
    this.authService.loginUser(login_data).then(() => {
      console.log('Inicio de sesión correcto, me voy a la página principal');
      this.navCtrl.navigateForward('menu/home'); 
    }).catch((error) => {
      console.log('Error al iniciar sesión:', error);
      this.loginMessage = error;
    });
  }
}