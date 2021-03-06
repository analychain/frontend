import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PdfFormComponent } from './pdf-form/pdf-form.component';
import { QrReaderComponent } from './qr-reader/qr-reader.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

const routes: Routes = [
  { path: 'pdf-reader', component: PdfFormComponent, data: { animation: 'isLeft' } },
  { path: 'qr-reader', component: QrReaderComponent, data: { animation: 'isRight' } },
  { path: 'visualizer', component: VisualizerComponent, data: { animation: 'isRight' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }