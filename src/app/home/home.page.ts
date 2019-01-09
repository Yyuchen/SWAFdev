import { Component } from '@angular/core';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { Platform } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
//test git
export class HomePage {

  pageProfile : ProfilePage = null;

  constructor(private bluetoothle : BluetoothLE, private platform : Platform, private profile: ProfilePage){
    platform.ready().then(()=>{
      if(bluetoothle.isEnabled){
        console.log("actived");
      }else console.log("not active");
    })
    this.pageProfile = profile;
    
  }
}
