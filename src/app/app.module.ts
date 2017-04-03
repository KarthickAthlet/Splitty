import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SplitAppBodyComponent } from './components/split-app-body/split-app-body.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NgFireService } from './services/ng-fire.service';

import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyA9Pz5nB__RIBLo60FgsE4vNZ2dFUANMuU',
    authDomain: 'splitty-da020.firebaseapp.com',
    databaseURL: 'https://splitty-da020.firebaseio.com',
    projectId: 'splitty-da020',
    storageBucket: 'splitty-da020.appspot.com',
    messagingSenderId: '713076101654'
};

const routes: Routes = [{
      path: 'login-page',
      component: LoginPageComponent
    },
    {
      path: 'create-profile-page',
      component: CreateProfileComponent
    }
    ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SplitAppBodyComponent,
    CreateProfileComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [NgFireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
