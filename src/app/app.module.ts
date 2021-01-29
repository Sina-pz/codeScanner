import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// the scanner!
import { ZXingScannerModule } from '@zxing/ngx-scanner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeScannerComponent } from './features/code-scanner/code-scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
