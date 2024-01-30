import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

export function confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('conPassword');  
  if (!password || !confirmPassword) {
    return null;
  }

  return password.value === confirmPassword.value ? null : { 'confirmPassword': true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  Validation_messages = {
    email: [
      { type: "required", message: "El email es obligatorio." },
      { type: "pattern", message: "Por favor, introduce un email válido." }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria." },
      { type: "pattern", message: "La contraseña debe contener al menos un número, una minúscula, una mayúscula y un símbolo." }
    ],
    conPassword: [
      { type: "required", message: "La confirmación de contraseña es obligatoria." },
      { type: "pattern", message: "La contraseña ingresada no es válida." },
      { type: "confirmPassword", message: "Las contraseñas no coinciden." }
    ],
    nombre: [
      { type: "required", message: "El nombre es obligatorio." },
      { type: "pattern", message: "Por favor, introduce un nombre válido." }
    ],
    apellido: [
      { type: "required", message: "El apellido es obligatorio." },
      { type: "pattern", message: "Por favor, introduce un apellido válido." }
    ]
  };
  registerMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
  
  ) {
    this.registerForm = this.formBuilder.group({
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
        Validators.compose([Validators.maxLength(12), Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)])
      ),
      conPassword: new FormControl(
        "",
        Validators.compose([
          Validators.maxLength(12),
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)
        ])
      ),
      nombre: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z ]+$")
        ])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z ]+$")
        ])
      )
    }, { validator: confirmPasswordValidator });
  }

  ngOnInit() {
  }

  register(register_data: any) {
    console.log(register_data);

    this.storage.set('userRegistered', true);
    console.log('Registro correcto, me voy al login');
    this.navCtrl.navigateForward('/login');
  }
}