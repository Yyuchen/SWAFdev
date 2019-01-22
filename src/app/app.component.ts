import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  colect:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    private storage: Storage
  ) {
    this.colect=true;
    this.initializeApp();
    this.presentAlertCheckbox();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Avez-vous bu d\'autres choses ?',
      inputs: [
        {
          name: 'the',
          type: 'checkbox',
          label: 'thé',
          value: '30', // la valeur convertir en tant d'eau
        },

        {
          name: 'jus',
          type: 'checkbox',
          label: 'jus',
          value: 'value2',
        },

        {
          name: 'smooth',
          type: 'checkbox',
          label: 'smooth',
          value: 'value3',
        },

        {
          name: 'soda',
          type: 'checkbox',
          label: 'soda',
          value: 'value4',
        },

        {
          name: 'b_énergétique',
          type: 'checkbox',
          label: 'boisson énergétique',
          value: 'value5',
        },
      ],
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.colect=false;
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Oui',
          role:"valide",
          handler: data => {
            //data = value2,value3
            this.colect=false;
            this.storage.set('selectedDrinks',data);
          //     if(data.cafe.checked){
          //       this.drinks.cafe=true;
          //     }
          //     if(data.jus.checked){
          //       this.drinks.jus=true;
          //     }
          //     if(data.smooth.checked){
          //       this.drinks.smooth=true;
          //     }
          //     if(data.soda.checked){
          //       this.drinks.soda=true;
          //     }
          //     if(data.b_énergétique.checked){
          //       this.drinks.b_énergétique=true;
          //     }
           
          }
        }
      ]
    });

     await alert.present();
  }

}
