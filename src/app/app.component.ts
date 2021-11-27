import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider] // register the animation
})
export class AppComponent {
  title = 'Form';
  
  public ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}

