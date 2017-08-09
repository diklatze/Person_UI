import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {PersonDetail} from './person-detail.ts'
import { AddPerson } from '../pages/add-person/add-person';
import { ContactPage } from '../pages/contact/contact';
import { PersonList } from '../pages/person-list/person-list';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Routes, provideRouter } from "@angular/router";

@NgModule({
  declarations: [
    MyApp,
    AddPerson,
    ContactPage,
    PersonDetail,
    PersonList,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPerson,
    ContactPage,
    PersonDetail,
    PersonList,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
