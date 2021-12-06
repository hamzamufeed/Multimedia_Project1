import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  src !: string;
  constructor() { }

  ngOnInit(): void {
    this.src = "http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd";
  }

}
