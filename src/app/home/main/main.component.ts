import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HomeVideosService} from "../home.videos.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  src !: string;
  id!: number;
  name!: string;

  constructor(private route: ActivatedRoute, private router: Router, private homeVideosService: HomeVideosService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

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
          this.src = this.homeVideosService.links[this.id];
          this.name = this.homeVideosService.videos[this.id];
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
