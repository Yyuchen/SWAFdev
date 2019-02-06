import { Platform } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

//test git
export class HomePage {
  @ViewChild('lineChart') lineChart;

  serviceUUID = "71103da0-91eb-11e5-aefa-0002a5d5c51b";
  initializeResult: object;
  params: object = {
    "request": true,
    "statusReceiver": false,
    "restoreKey": "bluetoothleplugin"
  };

  consomation = {
    autre: null,
    eau: null,
    date: null
  }
  pointClicked = null;
  objectif = null;
  username = null;
  colect = null;
  //param;
  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private storage: Storage,
    private router: Router,
    public alertController: AlertController,

    public modalController: ModalController,
    private route: ActivatedRoute) {
    this.presentAlertCheckbox();
    this.calculateObjectif();
    this.colect = true;

    // this.platform.ready().then((readySource) => {
    //   console.log('Platform ready from: ', readySource);
    //   this.bluetoothle.initialize().then(ble => {
    //     console.log('ble: ', ble.status) // logs 'enabled'
    //   })

    //   if (bluetoothle.isEnabled()) {
    //     // bluetoothle.connect()
    //     console.log("actived");
    //   } else console.log("not active");
    // })
    this.storage.get('username').then((val) => {
      this.username = val;
    });

  }
  sommeFev=9.3;
  getUsername() {
    this.storage.get('username').then((val) => {
      this.username = val;
    });
  }
  varConso = 0.5;
  initia(){
    this.varConso = 0.5;
    this.sommeFev=9.3+this.varConso;
    this.lineChartData=this.varideLineGraph(this.sommeFev)
  }
  boire() {
    this.varConso = this.varConso + Math.random();
    this.sommeFev=9.3+this.varConso;
    this.lineChartData=this.varideLineGraph(this.sommeFev)
  }
  //  getConsomation() {
  //   this.storage.get('selectedDrinks').then((val) => {
  //     this.consomation.autre = val;
  //     // console.log("home length: ", this.consomation.autre.length);
  //     // console.log("home conso: ", this.consomation.autre);
  //     //  console.log("home varConso: ", this.varConso);
  //   });
  // }

  conseille: String;
  restBoire: number;
  restBoireB: String;
  calculateObjectif() {
    var poids;
    this.storage.get('poids').then((val) => {
      poids = parseInt(val, 10);
      //formule de calcule d'eau
      var temp = poids - 20;
      temp = temp * 15;
      temp = temp + 1500;
      temp = temp - 1000;
      temp = temp / 1000;
      this.objectif = temp;
      this.restBoire = this.objectif - this.varConso;
      if (this.restBoire >= 0) {
        this.restBoireB = "Reste à boire: " + this.restBoire.toFixed(2);
      } else {

        this.restBoireB = "Vous avez dépassé de: " + Math.abs(this.restBoire).toFixed(2);
      }

      this.changeConseille();
      
    });
    this.storage.set('objectif', this.objectif);
  }

  //
  // Graphique
  //

  public lineChartData: Array<any> = [
    {
      data: [47.1, 9.3], label: "Litres", pointRadius: 10,
      pointHoverRadius: 15
    }
  ];

  varideLineGraph(valeur):any{
    let _linegraph: Array<any>;
    _linegraph = [
        {
          //il faut remplacer par array du donnée du verre!
          data: [47.1, valeur], pointRadius: 5, label: "Litres",
          pointHoverRadius: 15
        }
      ];
      return _linegraph;
  }



  public lineChartLabels: Array<any> = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];


  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: Array<any> = [
    { // blue A line
      backgroundColor: 'rgba(51, 204, 255,0.2)',
      borderColor: 'rgba(51, 204, 255,1)',
      pointBackgroundColor: 'rgba(0, 134, 179,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'

    }
  ];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';
  public barChartData: Array<any> = [
    {
      //il faut remplacer par array du donnée du verre!
      data: [1, 1.5, 1.7, 1.2, 2, 2, 0.5], label: "Litres", pointRadius: 5,
      pointHoverRadius: 15
    }
  ];
  // events
  public chartClicked(e: any): void {
    this.storage.set('moisClicked', e.active[0]._index);
    this.storage.get('moisClicked').then((val) => {
      this.moisClicked = val;
      this.generateLabel(this.moisClicked);
      this.barChartData = this.conditionData(this.moisClicked);
      
    });
  }

  // evenement de stationement de souris
  //  public chartHovered(e:any):void {
  //    console.log("hovered: "+e);
  //  }

  public changeChart() {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }

  public doRefresh($event) {

  }
  moisClicked = null;
  //label temporaire
  barChartLabels: Array<any> = ['01/02', '02/02', '03/02', '04/02', '05/02', '06/02', '07/02', '08/02', '09/02',
    '10/02', '11/02', '12/02', '13/02', '14/02', '15/02', '16/02', '17/02', '18/02', '19/02', '20/02', '21/02', '22/02',
    '23/02', '24/02', '25/02', '26/02', '27/02', '28/02'];

  public conditionData(mois): any {
    mois = mois + 1;
    let _barChartData: Array<any>;
    if (mois == '1') {
      _barChartData = [
        {
          //il faut remplacer par array du donnée du verre!
          data: [1, 1.5, 0.5, 1.3, 1.7, 1.8, 1.7, 1.7, 1.9, 1.2, 1.3, 0.8, 0.9, 1,
            1, 1.3, 2, 2, 3, 1.1, 1.7, 1.6, 1.5, 1.4, 1.2, 1.6, 1.4, 1.7, 2, 1.6,
            1.5, 1.2], pointRadius: 5, label: "Litres",
          pointHoverRadius: 15
        }
      ];

    } else if (mois == '2') {
      _barChartData = [
        {
          //il faut remplacer par array du donnée du verre!
          data: [1, 1.5, 1.7, 1.2, 2, 1.9, this.varConso], pointRadius: 5, label: "Litres",
          pointHoverRadius: 15
        }
      ];
    }
    return _barChartData;
  }

  public generateLabel(mois): any {
    let _barChartLabels = { data: new Array(31), label: this.monthName[mois] };
    let month = mois + 1;
    if (month < 10) {
      if ((month % 2) == 1 && month != 9 || month == 8) {
        for (let j = 0; j < 31; j++) {
          _barChartLabels.data[j] = j + 1 + "/0" + month;
        }
      } else if (month == 2) {
        for (let j = 0; j < 28; j++) {
          _barChartLabels.data[j] = j + 1 + "/0" + month;
        }
      } else {
        for (let j = 0; j < 30; j = j + 1) {
          _barChartLabels.data[j] = j + 1 + "/0" + month;
        }
      }
    } else {
      if ((month % 2) == 1) {
        for (let j = 0; j < 30; j++) {
          _barChartLabels.data[j] = j + 1 + "/" + month;
        }
      } else {
        for (let j = 0; j < 31; j++) {
          _barChartLabels.data[j] = j + 1 + "/" + month;
        }
      }
    }
    this.barChartLabels = _barChartLabels.data;
  }

  public monthName: Array<any> = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aut', 'Sep', 'Oct', 'Nov', 'Dec'];

  public barChartOptions: any = {
    responsive: true
  };
  public barChartColors: Array<any> = [
    { // blue A line
      backgroundColor: 'rgba(51, 204, 255,0.2)',
      borderColor: 'rgba(51, 204, 255,1)',
      pointBackgroundColor: 'rgba(0, 134, 179,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public barChartLegend: boolean = false;
  public barChartType: string = 'bar';
  public changeBarChart() {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  changeConseille() {
    if (this.varConso < this.objectif - 0.15) {
      this.conseille = "Pour l'instant, vous n'avez pas atteint votre objectif journalier. N'ésitez pas à boire plus d'eau. Si vous n'avez pas très soif, vous pouvez par exemple prendre un jus de fruit ou bien en manger un, cela apporte environ 0.2cl d'eau dans votre corps";
    } else if (this.varConso > this.objectif + 0.15) {
      this.conseille = "Super, vous avez atteint votre objectif journalier. Mais attention à ne pas trop boire. Si vous avez vraiment soif, nous vous conseillons simplement de prendre un fruit ou un yaourt. Mais pensez à ne pas tomber dans la surhydratation.";
    } else {
      this.conseille = "Super, vous avez atteint votre objectif journalier! Bravo! ne vous inquietez pas, vous pouvez toujours vous hydrater en prenant un yaourt, du thé ou même un jus de fruit. Vour pouvez aussi boire un verre d'eau, ça fait pas de mal."
    }
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Avez-vous bu ou mangé d\'autres choses ?',
      inputs: [
        {
          name: 'the 33cl',
          type: 'checkbox',
          label: 'thé',
          value: '0.20', // la valeur convertir en tant d'eau
        },
        {
          name: 'fruit',
          type: 'checkbox',
          label: 'fruit',
          value: '0.14', // la valeur convertir en tant d'eau
        },

        {
          name: 'jus',
          type: 'checkbox',
          label: 'jus 33cl',
          value: '0.10',
        },

        {
          name: 'smooth',
          type: 'checkbox',
          label: 'smooth 33cl',
          value: '0.12',
        },

        {
          name: 'b_énergétique',
          type: 'checkbox',
          label: 'boisson énergétique 33cl',
          value: '0.08',
        },
      ],
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.colect = false;
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Oui',
          role: "valide",
          handler: data => {
            //data = value2,value3
            this.colect = false;
            this.consomation.autre = data;
            for (let i = 0; i < this.consomation.autre.length; i++) {
              this.varConso = this.varConso + parseFloat(this.consomation.autre[i]);
            }
            this.calculateObjectif();
          }
        }
      ]
    });

    await alert.present();
  }

}
