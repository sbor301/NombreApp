import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
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

  login(login_data: any){
    console.log(login_data);
  }
}