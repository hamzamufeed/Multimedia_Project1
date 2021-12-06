import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  src : string = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";

  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'http://cdn.dashjs.org/latest/dash.all.min.js';
    tag.id = 'dash';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy() {
    document.getElementById('dash')?.remove();
  }

}
