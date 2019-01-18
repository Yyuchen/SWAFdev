
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
// import { join } from 'path';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
// import { Chart, AreaSeries, Legend, Zoom, DateTime, ScrollBar } from '@syncfusion/ej2-charts';
@Component({
  selector: 'app-histo-jour',
  templateUrl: './histo-jour.page.html',
  styleUrls: ['./histo-jour.page.scss'],
})
export class HistoJourPage implements OnInit {
  // chartDiv:Chart
  constructor() {
this.generateLabel();
  }

  //call back methode
  ngOnInit() {
  }


barChartLabels :Array<any>;

public barChartData:Array<any> = [
  {data: [0,65, 59, 80, 81, 56, 55, 40,5,10,3,],pointRadius: 10,
  pointHoverRadius: 15}
 //  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',pointRadius: 10,
 //  pointHoverRadius: 15}
 //  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C',pointRadius: 10,
 //  pointHoverRadius: 15}
];


 public generateLabel():any {
   let _barChartLabels:Array<any> = new Array(13);
   for (let i = 0; i < 12; i++) {
    _barChartLabels[i] = {data: new Array(31), label: this.monthName[i]};
    if((i%2) == 1 || i==8){
      for (let j = 0; j < 31; j++) {
        _barChartLabels[i].data[j] = j+1+"/"+i;
       }
    }else if(i==2){
      for (let j = 0; j < 29; j++) {
        _barChartLabels[i].data[j] = j+1+"/"+i;;
       }
    }else{
      for (let j = 0; j < 30; j++) {
        _barChartLabels[i].data[j] = j+1+"/"+i;;
       }
    }
   }
  this.barChartLabels= _barChartLabels[0].data;
 }





 public monthName:Array<any> = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil','Aut','Sep','Oct','Nov','Dec'];

 //public barChartLabels:Array<any> = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil','Aut','Sep','Oct','Nov','Dec'];
public barChartOptions:any = {
  responsive: true
};
public barChartColors:Array<any> = [
  { // blue A line
    backgroundColor: 'rgba(51, 204, 255,0.2)',
    borderColor: 'rgba(51, 204, 255,1)',
    pointBackgroundColor: 'rgba(0, 134, 179,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
public barChartLegend:boolean = false;
public barChartType:string = 'bar';

// events
public chartClicked(e:any):void {
  console.log("clicked: "+e);
  
}

public changeChart(){
  this.barChartType = this.barChartType ==='bar'? 'line':'bar';
}

// public chart(){
//   Chart.Inject(AreaSeries, DateTime, Legend, Zoom, ScrollBar);
// this.chartDiv = new Chart({
//         primaryXAxis: {
//             valueType: 'DateTime',
//         },
//         series: [
//             {
//                 type: 'Area',
//                 dataSource: this.barChartData,
//                 name: 'Product X',
//                 xName: 'x',
//                 yName: 'y',
//                 border: { width: 0.5, color: '#00bdae' },
//                 animation: { enable: false }
//             },
//         ],
//         zoomSettings:
//         {
//             enableSelectionZooming: true,
//             enableScrollbar: true,
//             mode:'X'
//         },
//         title: 'Sales History of Product X',
//         legendSettings: { visible: false },
// }, '#element');
// }

}
