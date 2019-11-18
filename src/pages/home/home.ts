import { Component } from '@angular/core';
import {LoadingController, ModalController, NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {PreviewPage} from "../preview/preview";
import {Storage} from "@ionic/storage";
import {Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  roomName="";myDate="";
  timeArray:any[] = [];
  loader;
  date;
  i = 0;
  time;
  copart1;copart2;copart18;
  copart3;copart4;copart5;copart6;copart7;copart8;copart9;copart10;copart11;copart12;copart13;copart14;copart15;copart16;copart17;
  coparts:any[] = [];
  timeSlot1;timeSlot2;timeSlot3;timeSlot4;timeSlot5;timeSlot6;timeSlot7;timeSlot8;
  timeSlot17;timeSlot16;timeSlot15;timeSlot14;timeSlot13;timeSlot12;timeSlot11;timeSlot10;
  timeSlot9;timeSlot18;timeSlot19;
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  timeFrame2;timeFrame3;timeFrame4;timeFrame5;timeFrame6;timeFrame7;timeFrame8;timeFrame9;timeFrame10;timeFrame11;timeFrame12;
  timeFrame13;timeFrame14;timeFrame15;timeFrame16;timeFrame17;timeFrame18;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public dbProvider:DatabaseProvider,
              public http:Http,public loadingCtrl:LoadingController,private storage: Storage,public modalCtrl : ModalController) {
    console.log("Home.ts")
    // this.loader = this.loadingCtrl.create({
    //   content: "Fetching Coparts...",
    //   spinner : 'crescent',
    // });
    let env = this;
    env.storage.get('timeFrame2').then(data => {
      this.timeFrame2 = data;
    });
    env.storage.get('timeFrame3').then(data => {
      this.timeFrame3 = data;
    });
    env.storage.get('timeFrame4').then(data => {
      this.timeFrame4 = data;
    });
    env.storage.get('timeFrame5').then(data => {
      this.timeFrame5 = data;
    });
    env.storage.get('timeFrame6').then(data => {
      this.timeFrame6 = data;
    });
    env.storage.get('timeFrame7').then(data => {
      this.timeFrame7 = data;
    });
    env.storage.get('timeFrame8').then(data => {
      this.timeFrame8 = data;
    });
    env.storage.get('timeFrame9').then(data => {
      this.timeFrame9 = data;
    });
    env.storage.get('timeFrame10').then(data => {
      this.timeFrame10 = data;
    });
    env.storage.get('timeFrame11').then(data => {
      this.timeFrame11 = data;
    });
    env.storage.get('timeFrame12').then(data => {
      this.timeFrame12 = data;
    });
    env.storage.get('timeFrame13').then(data => {
      this.timeFrame13 = data;
    });
    env.storage.get('timeFrame14').then(data => {
      this.timeFrame14 = data;
    });
    env.storage.get('timeFrame15').then(data => {
      this.timeFrame15 = data;
    });
    env.storage.get('timeFrame16').then(data => {
      this.timeFrame16 = data;
    });
    env.storage.get('timeFrame17').then(data => {
      this.timeFrame17 = data;
    });
    env.storage.get('timeFrame18').then(data => {
      this.timeFrame18 = data;
    });

    setTimeout(function () {
      env.fetchCoparts()
    },3000);
    // this.loader.present();
    // setInterval(function () {
    //   env.latestTime();
    // },1000);

  }

  presentConfirm() {
    let env = this;
    let alert1 = this.alertCtrl.create({
      title: '',
      message: 'Are You Sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            env.addMeeting();
            console.log('ok clicked');
          }
        }
      ]
    });
    alert1.present();
  }

  addMeeting(){
    let env= this;
    // if(this.timeSlot1 !=undefined){
    //   env.storage.set('timeSlot1',this.timeSlot1);
    // }
    // else {
    //   env.storage.set('timeSlot1',this.copart1);
    // }
    // if(this.timeSlot2 !=undefined){
    //   env.storage.set('timeSlot2',this.timeSlot2);
    // }
    // else {
    //   env.storage.set('timeSlot2',this.copart2);
    // }



    if(this.timeSlot2 !=undefined || this.timeSlot2 =='undefined'){
      env.storage.set('timeSlot2',this.timeSlot2);
      env.storage.set('timeFrame2',this.timeFrame2);
    }
    else {
      env.storage.set('timeSlot2',this.copart2);
      env.storage.set('timeFrame2',this.timeFrame2);
    }
    if(this.timeSlot3 !=undefined || this.timeSlot3 =='undefined'){
      env.storage.set('timeSlot3',this.timeSlot3);
      env.storage.set('timeFrame3',this.timeFrame3);
    }
    else {
      env.storage.set('timeSlot3',this.copart3);
      env.storage.set('timeFrame3',this.timeFrame3);
    }
    if(this.timeSlot4 !=undefined || this.timeSlot4 =='undefined'){
      env.storage.set('timeSlot4',this.timeSlot4);
      env.storage.set('timeFrame4',this.timeFrame4);
    }
    else {
      env.storage.set('timeSlot4',this.copart4);
      env.storage.set('timeFrame4',this.timeFrame4);
    }
    if(this.timeSlot5 !=undefined || this.timeSlot5 =='undefined'){
      env.storage.set('timeSlot5',this.timeSlot5);
      env.storage.set('timeFrame5',this.timeFrame5);
    }
    else {
      env.storage.set('timeSlot5',this.copart5);
      env.storage.set('timeFrame5',this.timeFrame5);
    }
    if(this.timeSlot6 !=undefined || this.timeSlot6 =='undefined'){
      env.storage.set('timeSlot6',this.timeSlot6);
      env.storage.set('timeFrame6',this.timeFrame6);
    }
    else {
      env.storage.set('timeSlot6',this.copart6);
      env.storage.set('timeFrame6',this.timeFrame6);
    }
    if(this.timeSlot7 !=undefined || this.timeSlot7 =='undefined'){
      env.storage.set('timeSlot7',this.timeSlot7);
      env.storage.set('timeFrame7',this.timeFrame7);
    }
    else {
      env.storage.set('timeSlot7',this.copart7);
      env.storage.set('timeFrame7',this.timeFrame7);
    }
    if(this.timeSlot8 !=undefined || this.timeSlot8 =='undefined'){
      env.storage.set('timeSlot8',this.timeSlot8);
      env.storage.set('timeFrame8',this.timeFrame8);
    }
    else {
      env.storage.set('timeSlot8',this.copart8);
      env.storage.set('timeFrame8',this.timeFrame8);
    }
    if(this.timeSlot9 !=undefined || this.timeSlot9 =='undefined'){
      env.storage.set('timeSlot9',this.timeSlot9);
      env.storage.set('timeFrame9',this.timeFrame9);
    }
    else {
      env.storage.set('timeSlot9',this.copart9);
      env.storage.set('timeFrame9',this.timeFrame9);
    }
    if(this.timeSlot10 !=undefined || this.timeSlot10 =='undefined'){
      env.storage.set('timeSlot10',this.timeSlot10);
      env.storage.set('timeFrame10',this.timeFrame10);
    }
    else {
      env.storage.set('timeSlot10',this.copart10);
      env.storage.set('timeFrame10',this.timeFrame10);
    }
    if(this.timeSlot11 !=undefined || this.timeSlot11 =='undefined'){
      env.storage.set('timeSlot11',this.timeSlot11);
      env.storage.set('timeFrame11',this.timeFrame11);
    }
    else {
      env.storage.set('timeSlot11',this.copart11);
      env.storage.set('timeFrame11',this.timeFrame11);
    }
    if(this.timeSlot12 !=undefined || this.timeSlot12 =='undefined'){
      env.storage.set('timeSlot12',this.timeSlot12);
      env.storage.set('timeFrame12',this.timeFrame12);
    }
    else {
      env.storage.set('timeSlot12',this.copart12);
      env.storage.set('timeFrame12',this.timeFrame12);
    }
    if(this.timeSlot13 !=undefined || this.timeSlot13 =='undefined'){
      env.storage.set('timeSlot13',this.timeSlot13);
      env.storage.set('timeFrame13',this.timeFrame13);
    }
    else {
      env.storage.set('timeSlot13',this.copart13);
      env.storage.set('timeFrame13',this.timeFrame13);
    }
    if(this.timeSlot14 !=undefined || this.timeSlot14 =='undefined'){
      env.storage.set('timeSlot14',this.timeSlot14);
      env.storage.set('timeFrame14',this.timeFrame14);
    }
    else {
      env.storage.set('timeSlot14',this.copart14);
      env.storage.set('timeFrame14',this.timeFrame14);
    }
    if(this.timeSlot15 !=undefined || this.timeSlot15 =='undefined'){
      env.storage.set('timeSlot15',this.timeSlot15);
      env.storage.set('timeFrame15',this.timeFrame15);
    }
    else {
      env.storage.set('timeSlot15',this.copart15);
      env.storage.set('timeFrame15',this.timeFrame15);
    }
    if(this.timeSlot16 !=undefined || this.timeSlot16 =='undefined'){
      env.storage.set('timeSlot16',this.timeSlot16);
      env.storage.set('timeFrame16',this.timeFrame16);
    }
    else {
      env.storage.set('timeSlot16',this.copart16);
      env.storage.set('timeFrame16',this.timeFrame16);
    }
    if(this.timeSlot17 !=undefined || this.timeSlot17 =='undefined'){
      env.storage.set('timeSlot17',this.timeSlot17);
      env.storage.set('timeFrame17',this.timeFrame17);
    }
    else {
      env.storage.set('timeSlot17',this.copart17);
      env.storage.set('timeFrame17',this.timeFrame17);
    }
    if(this.timeSlot18 !=undefined || this.timeSlot18 =='undefined'){
      env.storage.set('timeSlot18',this.timeSlot18);
      env.storage.set('timeFrame18',this.timeFrame18);
    }
    else {
      env.storage.set('timeSlot18',this.copart18);
      env.storage.set('timeFrame18',this.timeFrame18);
    }
    // env.storage.set('date',this.myDate);
    // env.storage.set('roomDetail',this.roomName);

    // env.nextPage(0,"09:00 AM - 09:30 AM",this.timeSlot1);
    env.nextPage(1,this.timeFrame2,this.timeSlot2);
    env.nextPage(2,this.timeFrame3,this.timeSlot3);
    env.nextPage(3,this.timeFrame4,this.timeSlot4);
    env.nextPage(4,this.timeFrame5,this.timeSlot5);
    env.nextPage(5,this.timeFrame6,this.timeSlot6);
    env.nextPage(6,this.timeFrame7,this.timeSlot7);
    env.nextPage(7,this.timeFrame8,this.timeSlot8);
    env.nextPage(8,this.timeFrame9,this.timeSlot9);
    env.nextPage(9,this.timeFrame10,this.timeSlot10);
    env.nextPage(10,this.timeFrame11,this.timeSlot11);
    env.nextPage(11,this.timeFrame12,this.timeSlot12);
    env.nextPage(12,this.timeFrame13,this.timeSlot13);
    env.nextPage(13,this.timeFrame14,this.timeSlot14);
    env.nextPage(14,this.timeFrame15,this.timeSlot15);
    env.nextPage(15,this.timeFrame16,this.timeSlot16);
    env.nextPage(16,this.timeFrame17,this.timeSlot17);
    env.nextPage(17,this.timeFrame18,this.timeSlot18);
    env.nextPage(288,this.timeSlot19,this.timeSlot18);
  }

  nextPage(index,time,name){
    let env = this;
    if(index ==288)
    {
      env.storage.set('session','true');
      env.navCtrl.push(PreviewPage,{TIME_DETAILS:env.timeArray,ROOM_NAME:env.roomName,DATE:env.myDate},{});
    }
    else {
      env.timeArray[env.i] = {
        TIMESLOT: time,
        NAME: name,
      };
      env.i++;
    }
    // env.navCtrl.push(PreviewPage,{TIME_DETAILS:env.timeArray,ROOM_NAME:env.roomName,DATE:env.myDate},{});
  }

  fetchCoparts() {
    let env = this;
    env.storage.get('roomDetail').then(data=>{
      this.roomName = data;
      env.storage.get('date').then(data=>{
        const d = new Date();
        let monthName = env.monthNames[d.getMonth()];
        env.date = new Date().getDate().toString();
        let year = new Date().getFullYear().toString();
        env.myDate = " " + monthName + " " + year;

        // env.storage.get('timeSlot1').then(data=>{
        //   this.copart1 = data;
        env.storage.get('timeSlot2').then(data=>{
          this.copart2 = data;
          console.log("QWW" + data);
          env.storage.get('timeSlot3').then(data=>{
            this.copart3 = data;
            env.storage.get('timeSlot4').then(data=>{
              this.copart4 = data;
              env.storage.get('timeSlot5').then(data=>{
                this.copart5 = data;
                env.storage.get('timeSlot6').then(data=>{
                  this.copart6 = data;
                  env.storage.get('timeSlot7').then(data=>{
                    this.copart7 = data;
                    env.storage.get('timeSlot8').then(data=>{
                      this.copart8 = data;
                      env.storage.get('timeSlot9').then(data=>{
                        this.copart9 = data;
                        env.storage.get('timeSlot10').then(data=>{
                          this.copart10 = data;
                          env.storage.get('timeSlot11').then(data=>{
                            this.copart11 = data;
                            env.storage.get('timeSlot12').then(data=>{
                              this.copart12 = data;
                              env.storage.get('timeSlot13').then(data=>{
                                this.copart13 = data;
                                env.storage.get('timeSlot14').then(data=>{
                                  this.copart14 = data;
                                  env.storage.get('timeSlot15').then(data=>{
                                    this.copart15 = data;
                                    env.storage.get('timeSlot16').then(data=>{
                                      this.copart16 = data;
                                      env.storage.get('timeSlot17').then(data=>{
                                        this.copart17 = data;
                                        env.storage.get('timeSlot18').then(data=>{
                                          this.copart18 = data;
                                          console.log("Last Copart->"+this.copart18);
                                          //TODO API PARSING
                                          // this.http.get('http://rayqube.com/projects/dtcm_way_finder/rest/get_coparts/', {}).map(res => res.json()).subscribe(data => {
                                          //   // console.log(data);
                                          //   //      loadingPopup.dismiss();
                                          //   let data_to_use = data.copart;
                                          //
                                          //  // console.log("data-> "+ JSON.stringify(data));
                                          //   for(let copart of data_to_use)
                                          //   {
                                          //     console.log("copartId-> " + copart.id + "copart_name-> " + copart.name);
                                          //     env.dbProvider.addCoParts(copart.id,copart.name).then(data=>{
                                          //       console.log("Working")
                                          //     });
                                          //   }
                                          //   env.dbProvider.getAllCoParts().then(data=>{
                                          //     env.coparts = data;
                                          //   });
                                          //   this.loader.dismiss();
                                          // },error2 => {
                                          //   console.log("error-> " + error2);
                                          //   env.dbProvider.getAllCoParts().then(data=>{
                                          //     env.coparts = data;
                                          //   });
                                          //   this.loader.dismiss();
                                          //  console.log("Internet is not there");
                                        })
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
    // });
    // });
  }

  latestTime(){
    let hour = new Date().getHours();
    let mins = new Date().getMinutes();
    this.time = this.formatAMPM(new Date());
  }
  openAuth(){
    let data = { message : 'preview' };
    let modalPage = this.modalCtrl.create('AuthPage',data);
    modalPage.present();
  }

  formatAMPM(date) {
    date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

}
