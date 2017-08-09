import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Person } from '../../app/person';
import 'rxjs/add/operator/map';
import { enableProdMode } from '@angular/core';
import { PersonDetail } from '../../app/person-detail';
enableProdMode();

@Component({
  selector: 'person-list',
  templateUrl: 'person-list.html'

})
export class PersonList {
  personList: Person[];

  constructor(public navCtrl: NavController,public http: Http) {
     this.http.get('http://localhost:8080/person')
       .map(res => res.json())
       .subscribe(data => { this.personList = data; },
       err => { console.log("Oops!"); });
    // this.personList = new Array<Person>();
    // this.personList.push(new Person());
    // this.personList[0].name = "Dikla";
    // this.personList[0].age = 27;
    // this.personList[0].gender = "Female";
    // this.personList.push(new Person());
    // this.personList.push(new Person());
    // this.personList[2].name = "Avi";
    // this.personList[2].age = 37;
    // this.personList[2].gender = "Male";
    

  }




}