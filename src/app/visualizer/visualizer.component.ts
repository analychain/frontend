import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { FetchSampleService } from '../fetch-sample.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})

export class VisualizerComponent implements OnInit {
  public url = '';
  public output = '';
  public code = '';
  public loading: boolean = false;
  
  constructor(
    private eventService: EventService,
    public fetchSampleService: FetchSampleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{ this.code = params.code;})
    this.eventService.on<string>().subscribe( data => {this.url = data;});
    this.loading = true;
    this.fetchSampleService.fetchSample(this.code).then( () => this.loading = false);
  }
}


// https://analychain.github.io/frontend/visualizer?istance=xxxxxx&code=xxxxxxx