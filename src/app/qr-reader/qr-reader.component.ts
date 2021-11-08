import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.css']
})
export class QrReaderComponent implements OnInit {

  constructor(private location: Location) {}

  ngOnInit(): void {
    
  }

  qrResultString = '';

  clearResult(): void {
    this.qrResultString = '';
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

  goBack(): void {
    this.location.back();
  }
}
