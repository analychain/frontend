import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//import FormsModule here
import { FormsModule } from '@angular/forms'; 
import { ZXingScannerModule } from '@zxing/ngx-scanner';


import { AppComponent } from './app.component';
import { PdfFormComponent } from './pdf-form/pdf-form.component';
import { QrReaderComponent } from './qr-reader/qr-reader.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PdfFormComponent,
    QrReaderComponent,
    VisualizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZXingScannerModule,
    FormsModule   //Assign FormsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
