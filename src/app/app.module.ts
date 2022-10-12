import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeAddComponent } from './bike-add/bike-add.component';
import { NavComponent } from './nav/nav.component';
import { BikeEditComponent } from './bike-edit/bike-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeListComponent,
    BikeAddComponent,
    NavComponent,
    BikeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//Remember to run localhost in terminal and json watch in 2nd terminal 