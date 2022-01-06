import { Component, OnInit } from '@angular/core';
import {HomeVideosService} from "../home.videos.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  videos!: string[];
  images!: string[];

  constructor(private homeVideosService: HomeVideosService) { }

  ngOnInit(): void {
    this.videos = this.homeVideosService.videos;
    this.images = this.homeVideosService.images;
  }

}
