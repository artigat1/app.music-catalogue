import {Component, Input, OnInit} from '@angular/core';

import {Music} from '../../shared/models';

@Component({
  selector: 'music-card-list',
  templateUrl: './music-card-list.component.html',
  styleUrls: ['./music-card-list.component.scss']
})
export class MusicCardListComponent implements OnInit {

  @Input()
  music: Music[];

  constructor() {
  }

  ngOnInit() {
  }

}
