import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionComponent } from './version/version.component';
import {HttpClientModule} from '@angular/common/http'
import { VersionService } from './version.service';
@NgModule({
  declarations: [
    AppComponent,
    VersionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VersionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
