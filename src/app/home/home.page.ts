
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { Platform } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';

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



//param;
  constructor(
    private bluetoothle : BluetoothLE, 
    private platform : Platform,
    public navCtrl      : NavController,
    private storage: Storage,
    private route: ActivatedRoute){
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



//
// Graphique
//



public lineChartData:Array<any> = [
   {data: [0,65, 59, 80, 81, 56, 55, 40,5,10,3], label: 'Series A',pointRadius: 10,
   pointHoverRadius: 15}
  //  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',pointRadius: 10,
  //  pointHoverRadius: 15},
  //  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C',pointRadius: 10,
  //  pointHoverRadius: 15}
 ];
 public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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
   },
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
 public lineChartLegend:boolean = true;
 public lineChartType:string = 'line';

//  public randomize():void {
//    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
//    for (let i = 0; i < this.lineChartData.length; i++) {
//      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
//      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
//        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
//      }
//    }
//    this.lineChartData = _lineChartData;
//  }

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }

// public technologies              : any = {
//   "technologies" : [
//                      {
//                         'technology' : 'Mobile: Ionic/Angular',
//                         'time'       : 50,
//                         'color'      : 'rgba(206, 61, 95, 0.5)',
//                         'hover'      : 'rgba(199, 108, 129, 0.5)'
//                      },
//                      {
//                         'technology' : 'Front-end: Sass/CSS',
//                         'time'       : 15,
//                         'color'      : 'rgba(83, 131, 185, 0.5)',
//                         'hover'      : 'rgba(122, 160, 202, 0.5)'
//                      },
//                      {
//                         'technology' : 'Server: PHP/MySQL',
//                         'time'       : 10,
//                         'color'      : 'rgba(198, 147, 194, 0.5)',
//                         'hover'      : 'rgba(200, 166, 197, 0.5)'
//                      },
//                      {
//                         'technology' : 'Code Documentation',
//                         'time'       : 5,
//                         'color'      : 'rgba(54, 116, 152, 0.5)',
//                         'hover'      : 'rgba(103, 139, 160, 0.5)'
//                      },
//                      {
//                         'technology' : 'Knowledge: Blogging',
//                         'time'       : 10,
//                         'color'      : 'rgba(152, 54, 145, 0.5)',
//                         'hover'      : 'rgba(152, 89, 149, 0.5)',
//                      },
//                      {
//                         'technology' : 'SEO/Online Marketing',
//                         'time'       : 10,
//                         'color'      : 'rgba(192, 192, 192, 0.5)',
//                         'hover'      : 'rgba(220, 220, 220, 0.5)'
//                      }
//  ]
// };

// public lineChartEl               : any;
// public chartLabels               : any    = [];
// public chartValues               : any    = [];
// public chartColours              : any    = [];
// public chartHoverColours         : any    = [];
// public chartLoadingEl            : any;

// ionViewDidLoad()
// {
//    this.defineChartData();
//    this.createLineChart();
// }

// defineChartData() : void
// {
//    let k : any;

//    for(k in this.technologies.technologies)
//    {
//       var tech  =      this.technologies.technologies[k];

//       this.chartLabels.push(tech.technology);
//       this.chartValues.push(tech.time);
//       this.chartColours.push(tech.color);
//       this.chartHoverColours.push(tech.hover);
//    }
// }

// createLineChart() : void
// {
//   this.lineChartEl 		  = new Chart(this.lineChart.nativeElement,
//     {
//        type: 'line',
//        data: {
//           labels: this.chartLabels,
//           datasets: [{
//              label                 : 'Daily Technology usage',
//              data                  : this.chartValues,
//              duration              : 2000,
//              easing                : 'easeInQuart',
//              backgroundColor       : this.chartColours,
//              hoverBackgroundColor  : this.chartHoverColours,
//              fill 				   : false
//           }]
//        },
//        options : {
//           maintainAspectRatio: false,
//           legend         : {
//              display     : true,
//              boxWidth    : 80,
//              fontSize    : 15,
//              padding     : 0
//           },
//           scales: {
//              yAxes: [{
//                 ticks: {
//                    beginAtZero:true,
//                    stepSize: 5,
//                    max : 100
//                 }
//              }],
//              xAxes: [{
//                 ticks: {
//                    autoSkip: false
//                 }
//              }]
//           }
//        }
//     });
// }


}
