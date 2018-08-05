import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './countries/start/start.component';
import { ImageService } from './services/image.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { WikiInfoService } from './services/wikiInfo.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ShortInfoService } from './services/shortInfo.service';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryDetailsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule,
    MatTabsModule
  ],
  providers: [ImageService, WikiInfoService, ShortInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
