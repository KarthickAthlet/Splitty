import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SplitAppBodyComponent } from './components/split-app-body/split-app-body.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { RouterModule } from '@angular/router';

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
    RouterModule.forRoot([{
      path: 'login-page',
      component: LoginPageComponent
    },
    {
      path: 'create-profile-page',
      component: CreateProfileComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
