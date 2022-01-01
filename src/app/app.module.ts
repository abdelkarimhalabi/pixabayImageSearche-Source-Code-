import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ImageListComponent } from './image-list/image-list.component';
import { FormsModule } from '@angular/forms';
import { ImageService } from './shared/images.service';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule
   
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
