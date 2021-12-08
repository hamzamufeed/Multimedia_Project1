import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  // src : string = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
  src !: string;
  id!: number;
  links : string[] = [
    'No Time To Die/my_video_manifest.mpd',
    'Horizon/my_video_manifest.mpd',
    'La Casa De Papel/my_video_manifest.mpd'
  ];

  constructor(private route: ActivatedRoute, private router: Router,) {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'http://cdn.dashjs.org/latest/dash.all.min.js';
    tag.id = 'dash';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.src = this.links[this.id];
          console.log(params['id']);
        }
      );
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy() {
    document.getElementById('dash')?.remove();
  }

}
