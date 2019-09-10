import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeVideoComponent } from './home-video/home-video.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
