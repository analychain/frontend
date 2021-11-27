import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.css']
})
export class QrReaderComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
    private eventService: EventService) {}

  ngOnInit(): void {
    
  }

  qrResultString = '';

  clearResult(): void {
    this.qrResultString = '';
  }

  public onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    this.eventService.emit<string>(this.qrResultString); //emits data to visualizer component
    var code_ = this.qrResultString.split("+", 2)
    this.router.navigate(['/visualizer'], {queryParams:{code: code_[1]}});
    console.log(code_[1]);
    
  }

  goBack(): void {
    this.location.back();
  }
}
