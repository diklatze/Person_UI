import { Component } from '@angular/core';

import { AddPerson } from '../add-person/add-person';
import { ContactPage } from '../contact/contact';
import { PersonList } from '../person-list/person-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PersonList;
  tab2Root = AddPerson;
  tab3Root = ContactPage;

  constructor() {

  }
}
