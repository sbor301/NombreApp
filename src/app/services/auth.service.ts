import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {if (!localStorage.getItem('users')) {
    // Si no hay usuarios, añadimos el usuario de administrador
    const adminUser = { email: 'admin@gmail.com', password: '@Admin1234' };
    localStorage.setItem('users', JSON.stringify([adminUser]));}
  }

  loginUser(credential: any){
    return new Promise((accept, reject)=>{
      // Obtengo los usuarios del almacenamiento local
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      // Busco al usuario en la lista de usuarios
      const user = users.find((user: any) => user.email === credential.email);

      if(user && user.password === credential.password){
        // Si el usuario existe y la contraseña es correcta, acepto la promesa
        accept('Login correcto');
      } else {
        // Si el usuario no existe o la contraseña es incorrecta, rechazo la promesa
        reject('Login incorrecto');
      }
    });
  }

  registerUser(credential: any){
    return new Promise((accept, reject)=>{
      // Obtengo los usuarios del almacenamiento local
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      // Compruebo si el usuario ya existe
      const userExists = users.find((user: any) => user.email === credential.email);

      if(userExists){
        reject('El usuario ya existe');
      } else {
        // Si el usuario no existe, lo añado al almacenamiento local
        users.push(credential);
        localStorage.setItem('users', JSON.stringify(users));
        accept('Registro correcto');
      }
    });
}
}

