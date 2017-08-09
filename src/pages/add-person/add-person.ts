import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from '../../app/person';
import { PersonDetail } from '../../app/person-detail';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'add-person',
  templateUrl: 'add-person.html'
})
export class AddPerson {
  myPerson: Person = new Person;
  constructor(public navCtrl: NavController, public http: Http) { }

  postPerson() {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');


    let body = { name: this.myPerson.name, age: this.myPerson.age, gender: this.myPerson.gender };

    this.http.post('http://localhost:8080/person', JSON.stringify(body), { headers: headers })
      .map(res => res.json())
      .subscribe(data => { console.log(data); });


  }
}
