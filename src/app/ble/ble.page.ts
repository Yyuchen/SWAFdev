import {Component, NgZone} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {Toast} from '@ionic-native/toast/ngx';
import {BLE} from '@ionic-native/ble/ngx';
import {ConnectPage} from '../connect/connect.page';


// BLUETOOTH UUID:
// Battery
const BATTERY_SERVICE ='0x180F';
const BATTERY_LEVEL_CHARACTERISTIC ='0X2A19';

// Configuration
const SWAF_SERVICE = '71103da0-91eb-11e5-aefa-0002a5d5c51b';
const CONFIG_CHARACTERISTIC = 'b6d62de0-91eb-11e5-8cf2-0002a5d5c51b';
const SERIAL_CHARACTERISTIC = '0acaf2f0-936d-11e5-8994-feff819cdc9f';
const NAME_CHARACTERISTIC = '25d2c79c-9842-11e5-8994-feff819cdc9f';
const PASWORD_CHARACTERISTIC = '0acaf57a-936d-11e5-8994-feff819cdc9f'; // Value: 0X34F65E45
const CURRENT_TIME_CHARACTERISTIC = '0acaf912-936d-11e5-8994-feff819cdc9f';
const HISTORY_CHARACTERISTIC = 'e646a640-91eb-11e5-8b1a-0002a5d5c51b';

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
        console.log('Constructor');
        this.toastCtrl.show(
            'Constructor',
            '5000',
            'center'
        ).subscribe(
            toast => {
                console.log(toast);
            }
        );
    }

    connectDevice(device) {
        this.setStatus('Device: ' + JSON.stringify(device, null, 2));

/*
        this.ble.connect(device.id);
        let array = new Uint16Array([0X34F65E45]);
        let typedArray = Int32Array.from([-2, -1, 0, 1, 2]);

        this.ble.write(device.id, '0x 71103da0-91eb-11e5-aefa-0002a5d5c51b', '0acaf57a-936d-11e5-8994-feff819cdc9f',  typedArray.buffer);

        this.ble.read(device.id, '0x180F', '0X2A19');
*/

        /*this.navController.navigateForward('connect');
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
        */// this.navCtrl.navigateForward('page-connect');
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
