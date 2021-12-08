import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  videos: string[] = ['Video1','Video2','Video3'];
  constructor() { }

  ngOnInit(): void {
  }

}
