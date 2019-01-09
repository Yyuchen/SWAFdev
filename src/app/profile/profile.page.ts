import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera , CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  bigImg = null;
  bigSize = '0';
  smallImg = null;
  smallSize = '0';
  poids= [];
  poidsUnity=[];
  genre = "f";


  constructor(public navCtrl: NavController, private camera: Camera) {
    this.smallImg = "assets/icon/water.png"

   }

  //
  //photo de profile
  //
  loadImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      allowEdit: false
    };
 
    this.camera.getPicture(options).then(imageData => {
      let base64data = 'data:image/jpeg;base64,' + imageData;
      this.bigImg = base64data;
    }, err => {
      console.log('gallery error: ', err);
    });
  }
 
  createThumbnail() {
    this.loadImage()
    this.generateFromImage(this.bigImg, 100, 100, 1, data => {
      this.smallImg = data;
    });
  }
 
  generateFromImage(img, MAX_WIDTH: number = 700, MAX_HEIGHT: number = 700, quality: number = 1, callback) {
    var canvas: any = document.createElement("canvas");
    var image = new Image();
 
    image.onload = () => {
      var width = image.width;
      var height = image.height;
 
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");
 
      ctx.drawImage(image, 0, 0, width, height);
 
      // IMPORTANT: 'jpeg' NOT 'jpg'
      var dataUrl = canvas.toDataURL('image/jpeg', quality);
 
      callback(dataUrl)
    }
    image.src = img;
  }

}
