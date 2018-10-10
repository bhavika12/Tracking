import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule} from '@angular/material';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { DataService } from 'src/app/data.service';
import { StoreModule } from "@ngrx/store";  
import { reducer } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule, MatFormFieldModule,
    MatSelectModule, MatOptionModule,
    StoreModule.forRoot({cart: reducer}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQlSuvA_1KqpEPpuYcU2HV-35AHckjJi8',
      libraries: ['places']
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }