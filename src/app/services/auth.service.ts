import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject)=>{
      if(
        credential.email = 'sebas@gmail.com' 
        && credential.password == 'Seb@s1234'
      ){
        accept('Login correcto');
      }else{
        reject('Login incorrecto')
      }
    });
  }
}
