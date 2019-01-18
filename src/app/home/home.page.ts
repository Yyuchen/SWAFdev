import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { Platform } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

//test git
export class HomePage {
  @ViewChild('lineChart') lineChart;

 serviceUUID ="71103da0-91eb-11e5-aefa-0002a5d5c51b";
 initializeResult: object;
 params: object = {
   "request": true,
   "statusReceiver": false,
   "restoreKey": "bluetoothleplugin"
 };

 consomation={
  autre:null,
  eau:null,
  date:null
}

objectif=null;

//param;
  constructor(
    private bluetoothle : BluetoothLE, 
    private platform : Platform,
    public navCtrl      : NavController,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute){
      
     this.calculateObjectif();
    this.platform.ready().then((readySource)=>{
 
      console.log('Platform ready from: ', readySource);
      this.bluetoothle.initialize().then(ble=>{
        console.log('ble: ', ble.status) // logs 'enabled'
      })
      
      if(bluetoothle.isEnabled()){
       // bluetoothle.connect()
        
        console.log("actived");

      }else console.log("not active");

  })


  // this.route.params.subscribe(params => {
  //     this.consomation.autre= params['this.drinks'];
  // });

}

setConsomation(){
  this.storage.get('selectedDrinks').then((val)=>{
    this.consomation.autre=val;
    console.log("home var: ",val);
    console.log("home conso: ",this.consomation.autre);
  });
 
}

calculateObjectif(){
  var poids;
   this.storage.get('poids').then((val)=>{
    poids= parseInt(val,10);
      //formule de calcule d'eau
  var temp= poids - 20;
  temp=temp*15;
  temp=temp+1500;
  temp=temp-1000;
  temp=temp/1000;
  this.objectif=temp;

  });
  this.storage.set('objectif',this.objectif);
}

//
// Graphique
//



public lineChartData:Array<any> = [
   {data: [0,65, 59, 80, 81, 56, 55, 40,5,10,3,],pointRadius: 10,
   pointHoverRadius: 15}
  //  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',pointRadius: 10,
  //  pointHoverRadius: 15}
  //  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C',pointRadius: 10,
  //  pointHoverRadius: 15}
 ];
 public lineChartLabels:Array<any> = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil','Aut','Sep','Oct','Nov','Dec'];
 public lineChartOptions:any = {
   responsive: true
 };
 public lineChartColors:Array<any> = [
   { // blue A line
     backgroundColor: 'rgba(51, 204, 255,0.2)',
     borderColor: 'rgba(51, 204, 255,1)',
     pointBackgroundColor: 'rgba(0, 134, 179,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   }
  //  { // dark grey
  //    backgroundColor: 'rgba(77,83,96,0.2)',
  //    borderColor: 'rgba(77,83,96,1)',
  //    pointBackgroundColor: 'rgba(77,83,96,1)',
  //    pointBorderColor: '#fff',
  //    pointHoverBackgroundColor: '#fff',
  //    pointHoverBorderColor: 'rgba(77,83,96,1)'
  //  },
  //  { // grey
  //    backgroundColor: 'rgba(148,159,177,0.2)',
  //    borderColor: 'rgba(148,159,177,1)',
  //    pointBackgroundColor: 'rgba(148,159,177,1)',
  //    pointBorderColor: '#fff',
  //    pointHoverBackgroundColor: '#fff',
  //    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //  }
 ];
 public lineChartLegend:boolean = false;
 public lineChartType:string = 'line';

//  public randomize():void {
//    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
//    for (let i = 0; i < this.lineChartData.length; i++) {
//      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
//      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
//        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
//      }
//    }
//  
//  }

 // events
 public chartClicked(e:any):void {
   console.log("clicked: "+e);
   this.router.navigate(['/histoJour']);
 }

// evenement de stationement de souris
//  public chartHovered(e:any):void {
//    console.log("hovered: "+e);
//  }

public changeChart(){
  this.lineChartType = this.lineChartType ==='line'? 'bar':'line';
}


}
