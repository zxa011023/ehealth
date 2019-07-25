import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-scanner',
    templateUrl: './scanner.component.html',
    styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

    @Output()
    scanSuccess: EventEmitter<string>;

    qrResultString: string;

    constructor() {
    }

    ngOnInit() {
    }


    onCodeResult(resultString: string) {
        this.qrResultString = resultString;
      }
}
