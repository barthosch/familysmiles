import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { SmileyComponent } from './smiley/smiley.component';
import { MemberComponent } from './member/member.component';


export const firebaseConfig = {
  apiKey: "AIzaSyB-ryH22lVDrxI3bIQvLfTTUB32QmHP-Rk",
  authDomain: "familysmiles-68135.firebaseapp.com",
  databaseURL: "https://familysmiles-68135.firebaseio.com",
  projectId: "familysmiles-68135",
  storageBucket: "familysmiles-68135.appspot.com",
  messagingSenderId: "234372971805"
};

@NgModule({
  declarations: [
    AppComponent,
    SmileyComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
