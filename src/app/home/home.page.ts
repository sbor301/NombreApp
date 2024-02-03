import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  event_list: any;
  categories_list: any;
  constructor(private router: Router,
    private storage: Storage,
    private events: EventsService,
    private menu: MenuController) {}
    
    ionViewDidEnter() {
      this.events.getEvents().then(
        res => {
          this.event_list = res;
          console.log("Eventos desde el servidor", this.event_list);
        }
      );
    
      console.log("Local Events", this.events.getLocalEvents().events);
    
      this.events.getCategories().then(
        res => {
          this.categories_list = res;
          console.log("Categorias desde el servidor", this.categories_list);
        }
      );
    
      this.events.getCatId('1').then(
        res => {
          this.categories_list = res;
          console.log("Id de categoria desde el servidor", this.categories_list);
        }
      );
    }
    

  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('menu/intro');
    
    
  }
}

