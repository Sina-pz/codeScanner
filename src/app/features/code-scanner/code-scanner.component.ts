import { Device } from './../../model-data/device';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-code-scanner',
  templateUrl: './code-scanner.component.html',
  styleUrls: ['./code-scanner.component.scss']
})
export class CodeScannerComponent implements OnInit {
  public allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODABAR, BarcodeFormat.CODE_93, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX];
  //
  public foundDevices: Device[];
  public scannerEnabled = true;
  public desiredDevice = true;
  public torch = true;

  @ViewChild('scanner', { static: false }) public scanner: ZXingScannerComponent;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.scanner.device);

  }

  onTorchCompatible(event: any): void {
    console.log('onTorchCompatible');

  }
  camerasFoundHandler(event: any): void {
    console.log('camerasFoundHandler');
    console.log(event);
    event.forEach(device =>{
      console.log('first-input-device'+ device);
      console.log('second' + new Device().fromZScanner(device))
      
    });
  }
  camerasNotFoundHandler(event: any): void {
    console.log('camerasNotFoundHandler');

  }
  scanSuccessHandler(event: any): void {
    console.log('scanSuccessHandler');

  }
  scanErrorHandler(event: any): void {
    console.log('scanErrorHandler');

  }
  scanFailureHandler(event: any): void {
    console.log('scanFailureHandler');
  }
  scanCompleteHandler(event: any): void {
    console.log('scanCompleteHandler');

  }

}
