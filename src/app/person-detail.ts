import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import {Person} from './person';
 

@Component({
  selector: 'person-detail',
  templateUrl: 'person-detail.html',
  //styleUrls: [ './app/person-detail.scss' ],
  
})


export class PersonDetail {
 @Input() person: Person;


constructor(){};

getStyle(): string {

    switch (this.person.gender) {

      case ("Female"): {
        return "HotPink";
      }
      case ("Male"): {
        return "SkyBlue";

      } case ("Other"): {
        return "PaleGreen";
      }

      case ("none"): {
        return "white";
      }


    }
  }



}
