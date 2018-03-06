import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html'
})
export class SpeakerDetailPage {
  userSelected: any = '';

  constructor(public dataProvider: ConferenceData, public navCtrl: NavController, public navParams: NavParams) {
  }

 /* ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      console.log("data.userData.city --- ");
      if (data && data.users) {
        for (const speaker of data.users) {
          if (speaker && speaker.id === this.navParams.data.speakerId) {
            this.speaker = speaker;
            break;
          }
        }
      }
    });

  }*/



ionViewWillEnter() {
    console.log("this.userSelected  ---- "+this.userSelected );
    this.dataProvider.load().subscribe((data: any) => {
      console.log("data.userData.city --- "+data.userData[0].city);
      if (data && data.userData) {
           data.userData.forEach((city: any) => {
              // loop through each timeline group in the day
              city.areaList.forEach((area: any) => {
              // loop through each session in the timeline group

        //for (const speaker of area) {
              area.users.forEach((speaker: any) => {
                console.log("speaker.id --->> "+speaker.id);
                console.log("this.navParams.data.speakerId --->> "+this.navParams.data.speakerId); 
                console.log("this.speaker ---- "+speaker.user);
                   console.log("this.speaker.address.residencyName ---- "+speaker.address.residencyName);
               // let person = speaker.find((s: any) => s.id === this.navParams.data.speakerId);
                if (speaker && speaker.id === this.navParams.data.speakerId) {
                  this.userSelected = speaker;
                 //  console.log("this.speaker.user --->> "+this.speaker.user);
               // break;
                }
              });
            //}
          });
        });
      }
    });

  }




  goToSessionDetail(session: any) {
    this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
  }
}
