import { Component , OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera , CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage  implements OnInit {

  bigImg = null;
  bigSize = '0';
  smallImg = "assets/icon/water.png";
  smallSize = '0';

 
  genre = "h";
  dataNaissance = null;
  poids= null;
  taille = null;
  actPro = null;
  actSpo = null;
  sportFrequence = null;
  dureeSprot = null;
  username = "Username";

  drinks={
    the:false,
    jus:false,
   smooth:false,
   soda:false,
   b_énergétique:false
   };
  //Construction lors du démarrage du app
  constructor(public navCtrl: NavController, 
    private camera: Camera,
    private storage: Storage,
    private http: HttpClient, 
    public alertController: AlertController,
    private fb: Facebook) {
    //Récupérer les données sauvegardés 
    storage.get('imgPro').then((val) => {
      this.smallImg=val;
    });
    storage.get('genre').then((val)=>{
      this.genre=val;
    });
    storage.get('dateN').then((val)=>{
      this.dataNaissance=val;
    });
    storage.get('poids').then((val)=>{
      this.poids=val;
    });
    storage.get('taille').then((val)=>{
      this.taille=val;
    });
    storage.get('actPro').then((val)=>{
      this.actPro=val;
    });
    storage.get('actSpo').then((val)=>{
      this.actSpo=val;
    });
    storage.get('sportFrequence').then((val)=>{
      this.sportFrequence=val;
    });    
    storage.get('dureeSprot').then((val)=>{
      this.dureeSprot=val;
    });
    storage.get('username').then((val)=>{
      this.username=val;
    });
  
  }

  ngOnInit() {
  }

  //
  // Sauvegarder les données lors du saisi
  //
   async setGenre(){
     this.storage.set('genre',this.genre);
   }



   async setNaissance(){
      this.storage.set('dateN',this.dataNaissance);
   }

   async setPoids(){
     if(this.poids>=500){
       this.poids=null;
     }else{
      this.storage.set('poids',this.poids);
     }
   }

   async setTaille(){
     if(this.taille>=200){
       this.taille=null;
     }else{
      this.storage.set('taille',this.taille);
     }
   }

   async setActPro(){
    this.storage.set('actPro',this.actPro);
   }
 
   async setActSpo(){
    this.storage.set('actSpo',this.actSpo);
   }

   async setSpoFrenq(){
    this.storage.set('sportFrequence',this.sportFrequence);
   }

   async setSpoDuree(){
    this.storage.set('dureeSprot',this.dureeSprot);
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
      this.storage.set('imgPro',data);
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


  async presentPrompt() {
    const  alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
          , {
            text: 'Valider',
            role:'ok',
            handler: data => {
              this.storage.set('username',data.username);
              this.username = data.username;
            }
          }   
      ]
    });
    
   await alert.present();
  }


  
user:any={}
loginFab(){
  this.fb.login(['public_profile', 'email'])
  .then((res: FacebookLoginResponse) => {
    if(res.status === 'connected'){
      console.log('connected');
      // this.user.img = 'https://graph.facebook.com/'+res.authResponse.userID+'/picture?type=square'; 
      
      // this.getData(res.authResponse.accessToken); 
    }else{
      alert('Login failed');
    }
     console.log('Logged into Facebook!', res)
    })
  .catch(e => console.log('Error logging into Facebook', e));
}
userdata:String;
getData(access_token:String){
  let url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&acceess_token='+access_token;
  this.http.get(url).subscribe(data=>{
    this.userdata = JSON.stringify(data);
    console.log(data)
  })

}

// public doRefresh($event){
//   setTimeout(() => {
//     console.log('Async operation has ended');
//     event.target.complete();
//   }, 2000);
  
// }

}
