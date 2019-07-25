import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
    selector: 'app-scanner',
    templateUrl: './scanner.component.html',
    styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

    @Output()
    scanSuccess: EventEmitter<string>;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }


    onCodeResult(resultString: string) {
        Swal.fire({
            position: 'center',
            type: 'success',
            title: '掃描成功',
            text: resultString,
            showConfirmButton: false,
            timer: 1000
        });
        this.router.navigate(['/']);
    }
}
