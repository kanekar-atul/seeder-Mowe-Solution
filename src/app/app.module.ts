import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SearchPipe } from './data-table/filter.pipe';
import { StarRaitingComponent } from './star-raiting/star-raiting.component';
import {DataService} from './data-table/data.services';
import { DataDetailsComponent } from './data-details/data-details.component';
@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    StarRaitingComponent,
    SearchPipe,
    DataDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
