import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  slides = [
    {
      title: "MORA",
      description: "Gabriel Armando Mora Quintero (Bayamón, 18 de abril de 1996), conocido por su nombre artístico Mora, es un cantante, compositor y productor discográfico puertorriqueño. ",
      image: "../../assets/images/mora.jpeg",
      help_text: "https://open.spotify.com/intl-es/artist/0Q8NcsJwoCbZOHHW63su5S",
      class: "slide-1",
    },
    {
      title: "ARCANGEL",
      description: "Austin Agustín Santos, ​ más conocido por su nombre artístico Arcángel, es un cantante y compositor estadounidense. También es conocido por haber comenzado su carrera artística formando parte del dúo Arcángel & De la Ghetto.",
      image: "../../assets/images/arcangel.jpeg",
      help_text: "https://open.spotify.com/intl-es/artist/4SsVbpTthjScTS7U2hmr1X",
      class: "slide-2", 
    },
    {
      title: "ELADIO CARRION",
      description: "Eladio Carrión Morales (Kansas City, Misuri; 14 de noviembre de 1994) es un rapero y compositor estadounidense.​",
      image: "../../assets/images/eladio.jpeg",
      help_text: "https://open.spotify.com/intl-es/artist/5XJDexmWFLWOkjOEjOVX3e",
      class: "slide-3",
    }
  ]
  constructor(private router: Router,
    private storage: Storage,
    private menu: MenuController,) { }

    
  goToHome(){
    console.log("go to home");
    this.router.navigateByUrl('menu/home');
    
    
  }


  ionViewDidEnter(){
    console.log("Ya entre y vi la intro")
    this.storage.set('mostreLaIntro', true);
  }

}
