import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SearchPipe } from './data-table/filter.pipe';
import { StarRaitingComponent } from './star-raiting/star-raiting.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    StarRaitingComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
