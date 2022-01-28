import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-pdf-form',
  templateUrl: './pdf-form.component.html',
  styleUrls: ['./pdf-form.component.css']
})

export class PdfFormComponent implements OnInit {
  
  code = '';

  constructor(private location: Location) {
  }

  ngOnInit() {
    
  }

  Validation() {

    if (this.code == 'Prova') {
        alert('Compreso.')
    }
    else
        alert("Non ho capito, riprova.");
  }

  goBack(): void {
    this.location.back();
  }
}
