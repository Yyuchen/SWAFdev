import { Component } from '@angular/core';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
//test git
export class HomePage {

  constructor(private bluetoothle : BluetoothLE, private platform : Platform){
    platform.ready().then(()=>{
      if(bluetoothle.isEnabled){
        console.log("actived");
      }else console.log("not active");
    })
  }
}
