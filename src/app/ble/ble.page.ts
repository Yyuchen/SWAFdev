

// BLUETOOTH UUID:
// Battery
import {Component, NgZone} from "@angular/core";
import {NavController} from "@ionic/angular";
import {Toast} from "@ionic-native/toast/ngx";
import {BLE} from "@ionic-native/ble/ngx";



const UUID_VERRE = 'B0:B4:48:DD:67:9C';
const BATTERY_SERVICE = '0x180F';
const BATTERY_LEVEL_CHARACTERISTIC = '0X2A19';
// Configuration
const SWAF_SERVICE = '71103da0-91eb-11e5-aefa-0002a5d5c51b';
const CONFIG_CHARACTERISTIC = 'b6d62de0-91eb-11e5-8cf2-0002a5d5c51b';
const SERIAL_CHARACTERISTIC = '0acaf2f0-936d-11e5-8994-feff819cdc9f';
const NAME_CHARACTERISTIC = '25d2c79c-9842-11e5-8994-feff819cdc9f';
const PASWORD_CHARACTERISTIC = '0acaf57a-936d-11e5-8994-feff819cdc9f'; // Value: 0X34F65E45
const PASSWORD_VALUE = 0X34F65E45;
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
    ) {}

    connectDevice(device) {
        this.setStatus('Device: ' + JSON.stringify(device, null, 2));

        this.connect(device);

        let buffer = new ArrayBuffer(PASSWORD_VALUE);
        this.ble.write(device.id, SWAF_SERVICE, PASWORD_CHARACTERISTIC, buffer);

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

    onConnected(device) {
        this.access(device);
        this.readBattery(device);
    }

    access(device) {
        let value = 0X34F65E45;
        let buffer = new ArrayBuffer(value);
        this.ble.write(device.id, SWAF_SERVICE, PASWORD_CHARACTERISTIC, buffer);

        let toast = this.toastCtrl.show(
            'Connection successful!',
            '3000',
            'center'
        ).subscribe(
            toast => {
                console.log(toast);
            }
        );
    }

    readBattery(device) {
        this.ble.read(device.id, BATTERY_SERVICE, BATTERY_LEVEL_CHARACTERISTIC).then(
            buffer => {
                let data = new Uint8Array(buffer);
                console.log('Battery level ' + data[0]);
                let toast = this.toastCtrl.show(
                    'Battery level ' + data[0],
                    '3000',
                    'center'
                ).subscribe(
                    toast => {
                        console.log(toast);
                    }
                );
            }
        )
    }
    connection:any
    scan() {
        if(this.connection==false){

        }else{
        this.setStatus('Scanning for Bluetooth LE Devices');
        this.devices = [];  // clear list
        this.ble.scan([], 3600).subscribe(
            device => this.onDeviceDiscovered(device),
            error => this.scanError(error)
        );
        this.ble.startScanWithOptions([],
            {
                reportDuplicates: true
            });
        setTimeout(this.ble.stopScan,
            5000,
            function () {
                console.log("Scan complete");
            },
            function () {
                console.log("stopScan failed");
            }
        );
    }
    }

    connect(device) {
        this.ble.autoConnect(
            device.id,
            success => this.onConnected(success),
            error => this.connectError(error));
    }

    connectDirect() {
        this.ble.autoConnect(
            UUID_VERRE,
            success => this.onConnected(success),
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
            'The peripheral unexpectedly disconnected - ERROR',
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
        this.connectDirect();
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
