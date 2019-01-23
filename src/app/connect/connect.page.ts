import {Component, NgZone} from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';

import {Toast} from '@ionic-native/toast/ngx';
import {BLE} from '@ionic-native/ble/ngx';

@Component({
    selector: 'page-connect',
    templateUrl: 'connect.page.html',
    styleUrls: ['connect.page.scss']

})
export class ConnectPage {

    peripheral: any = {};
    statusMessage: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private ble: BLE,
                private toastCtrl: Toast,
                private ngZone: NgZone) {

/*
        let device = navParams.get('device');

        this.setStatus('Connecting to ' + device.name || device.id);

        this.ble.connect(device.id).subscribe(
            peripheral => this.onConnected(peripheral),
            peripheral => this.onDeviceDisconnected(peripheral)
        );
*/

    }

    onConnected(peripheral) {
        this.ngZone.run(() => {
            this.setStatus('');
            this.peripheral = peripheral;
        });
    }

    onDeviceDisconnected(peripheral) {
        this.toastCtrl.show(
            'The peripheral unexpectedly disconnected',
            '3000',
            'center'
        ).subscribe(
            toast => {
                console.log(toast);
            }
        );
    }

    // Disconnect peripheral when leaving the page
    ionViewWillLeave() {
        console.log('ionViewWillLeave disconnecting Bluetooth');
        this.ble.disconnect(this.peripheral.id).then(
            () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
            () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
        );
    }

    setStatus(message) {
        console.log(message);
        this.ngZone.run(() => {
            this.statusMessage = message;
        });
    }

}
