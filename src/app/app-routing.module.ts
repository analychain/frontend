import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PdfFormComponent } from './pdf-form/pdf-form.component';
import { QrReaderComponent } from './qr-reader/qr-reader.component';

const routes: Routes = [
  { path: 'pdf-reader', component: PdfFormComponent },
  { path: 'qr-reader', component: QrReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }