
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
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
  moisClicked = null;
  constructor(private storage: Storage) {

    this.storage.get('moisClicked').then((val) => {
      this.moisClicked = val;
      this.generateLabel(this.moisClicked);
    });
    // this.generateLabel(this.moisClicked);
  }

  //call back methode
  ngOnInit() {
  }


  barChartLabels: Array<any>;

  public barChartData: Array<any> = [
    {
      //il faut remplacer par array du donnée du verre!
      data: [7, 65, 59, 80, 81, 56, 55, 40, 5, 10, 3, 40], pointRadius: 10,
      pointHoverRadius: 15
    }
    //  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',pointRadius: 10,
    //  pointHoverRadius: 15}
    //  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C',pointRadius: 10,
    //  pointHoverRadius: 15}
  ];

  public generateLabel(mois): any {
    let _barChartLabels = { data: new Array(31), label: this.monthName[mois] };
    let month= mois+1; 
    if (month < 10) {
      if ((month % 2) == 1 && month != 9 || month == 8 ) {
        for (let j = 0; j < 31; j++) {
          _barChartLabels.data[j] = j+1  + "/0" + month;
        }
      } else if (month == 2) {
        for (let j = 0; j < 28; j++) {
          _barChartLabels.data[j] = j+1 + "/0" + month;

        }
      } else {
        console.log("3");
        for (let j = 0; j < 30; j = j + 1) {
          _barChartLabels.data[j] = j+1 + "/0" + month;
        }
      }
    } else {
      if ((month % 2) == 1 || month == 8) {
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

  //public barChartLabels:Array<any> = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil','Aut','Sep','Oct','Nov','Dec'];
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

  // events
  public chartClicked(e: any): void {
    console.log("clicked: " + e);

  }

  public changeChart() {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

}
