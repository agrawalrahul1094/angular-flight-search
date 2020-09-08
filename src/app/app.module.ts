import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, BrowserAnimationsModule, HttpClientModule],
  providers: [BaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
