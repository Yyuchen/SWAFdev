import {Component, NgZone} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {Toast} from '@ionic-native/toast/ngx';
import {BLE} from '@ionic-native/ble/ngx';
import {Deeplinks} from '@ionic-native/deeplinks/ngx';
import {ConnectPage} from '../connect/connect.page';


@Component({
    selector: 'app-ble',
    templateUrl: 'ble.page.html',
    styleUrls: ['ble.page.scss']
})

export class BlePage {
    devices: any[] = [];
    statusMessage: string;

    constructor(
        public navController: NavController,
        public toastCtrl: Toast,
        public ble: BLE,
        public ngZone: NgZone
    ) {

    }

    open(device) {
        this.setStatus('Device: ' + JSON.stringify(device, null, 2));
        this.navController.navigateForward('connect');
        this.toastCtrl.show(
            'Hello',
            'short',
            'center'
        ).subscribe(
            toast => {
                console.log(toast);
            }
        );

        console.log(JSON.stringify(device) + ' selected');
        // this.navCtrl.navigateForward('page-connect');
    }

    scan() {
        this.setStatus('Scanning for Bluetooth LE Devices');
        this.devices = [];  // clear list
        this.ble.scan([], 5).subscribe(
            device => this.onDeviceDiscovered(device),
            error => this.scanError(error)
        );
    }

    connect() {
        this.ble.autoConnect(
            `B0:B4:48:DD:67:9C`,
            success => this.connectSuccess(success),
            error => this.connectError(error));
    }

    connectSuccess(success) {
        this.setStatus('Success ' + success);
        this.toastCtrl.show(
            'Success connecting to SWAF device',
            '5000',
            'center'
        ).subscribe(
            toast => {
                console.log(toast);
            }
        );
    }

    connectError(error) {
        this.setStatus('Error ' + error);
        this.toastCtrl.show(
            'Error connecting to SWAF device',
            '5000',
            'center'
        ).subscribe(
            toast => {
                console.log(toast);
            }
        );
    }

    onDeviceDiscovered(device) {
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(() => {
            this.devices.push(device);
        });
    }

    scanError(error) {
        this.setStatus('Error ' + error);
        this.toastCtrl.show(
            'Error scanning for Bluetooth low energy devices',
            '5000',
            'center'
        ).subscribe(
            toast => {
                console.log(toast);
            }
        );
    }

    setStatus(message) {
        console.log(message);
        this.ngZone.run(() => {
            this.statusMessage = message;
        });
    }
}
