import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddItemComponent } from './add-item/add-item.component';
import { QuickStatsComponent } from './quick-stats/quick-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    QuickStatsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
