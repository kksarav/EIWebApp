import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';


import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
     RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

