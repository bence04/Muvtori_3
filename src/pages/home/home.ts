import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private goodAns = 0;
  private wrongAns = 0;
  private actualInd = 0;
  private src = "";
  private data: any;
  private dataLength = 0;

  constructor(public navCtrl: NavController, public http: HttpClient, public alertCtrl: AlertController) {
    this.http.get('assets/img.json').subscribe(res => {
      this.data = this.shuffle(res);
      this.dataLength = Object.keys(this.data).length;
      this.loadPicture();
    });
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  loadPicture() {
    if(this.actualInd == this.dataLength) {
      let percent = this.goodAns / this.dataLength * 100;
      let alert = this.alertCtrl.create({
        title: 'Végeztél az összessel',
        subTitle: percent + '% a jó válaszaid aránya.',
        buttons: [{
          text: 'Újra',
          handler: () => {
            this.goodAns = 0;
            this.wrongAns = 0;
            this.data = this.shuffle(this.data);
            this.actualInd = 0;
            this.loadPicture();
          }
        }]
      });
      alert.present();
    } else {
      this.src = this.data[this.actualInd].src;
    }
  }

  check() {
    this.presentConfirm();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: this.data[this.actualInd].name,
      message: this.data[this.actualInd].author,
      buttons: [
        {
          text: 'Tudtam 😀',
          handler: () => {
            this.goodAns++;
            this.actualInd++;
            this.loadPicture();
          }
        },
        {
          text: 'Nem tudtam 😞',
          handler: () => {
            this.wrongAns++;
            this.actualInd++;
            this.loadPicture();
          }
        }
      ]
    });
    alert.present();
  }

}
