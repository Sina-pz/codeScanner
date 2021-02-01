
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeFormat, Result } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { ResultAndError } from '@zxing/ngx-scanner/lib/ResultAndError';

@Component({
  selector: 'app-code-scanner',
  templateUrl: './code-scanner.component.html',
  styleUrls: ['./code-scanner.component.scss']
})
export class CodeScannerComponent implements AfterViewInit, OnInit {
  public allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODABAR, BarcodeFormat.CODE_93, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX];
  public selectedDeviceId: string;
  public scannerEnabled = true;
  public desiredDevice = true;
  public torch = true;

  @ViewChild('scanner', { static: false }) public scanner: ZXingScannerComponent;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.scanner.updateVideoInputDevices()
    .then(devices =>{
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === "videoinput") {
          videoDevices.push(device);
        }
      }

      if (videoDevices.length > 0) {
        let selectedDevice: MediaDeviceInfo;
        for (const device of videoDevices) {
          selectedDevice = device;
          break;
        }
        if (selectedDevice) {
          this.selectedDeviceId = selectedDevice.deviceId;
          
        } else {
          this.selectedDeviceId  = videoDevices[0].deviceId;
        }
      }

        
    });
    this.scanner.tryHarder = false;
    this.scanner.scanStop();
    this.scanner.codeReader
    .scanFromDeviceObservable(this.selectedDeviceId)
    .then(resultAndErr => resultAndErr.subscribe(resultAndErr => this.fromScanner(resultAndErr)));
    

  }
  private fromScanner(resultAndErr: ResultAndError): void {
    if (resultAndErr.result) {
      console.log(resultAndErr.result);
    } else (
      console.log(resultAndErr.error)
      
    )
    
  }

  onTorchCompatible(event: any): void {
    console.log('onTorchCompatible');

  }
  camerasFoundHandler(event: any): void {
    // let selectedDeviceId;
      console.log('camerasFoundHandler');

    // this.scanner.updateVideoInputDevices()
    // .then(devices => console.log(devices) );
    // this.scanner.tryHarder = false;
    // this.scanner.askForPermission().then(permission => {
    //   console.log('Permissions response: ' + permission);
      
    // });
       

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





// Hello! So you can stop the scanner element using it's API or by setting
// the scannerEnabled property to false.

// To enable the scanner back you must set scannerEnabled to true and set 
// the device again

//  * Delay between attempts to decode (default is 500ms)
// */
// timeBetweenScans: number; 

// get/set enabled // isEnable: eventEmiter
// get/set tryHarder

// scanStop(): // scanStart() // restart() //

//reset(): void;

// * Dispatches the scan event.
// *
// * @param result the scan result.
// */
// private dispatchScanComplete;