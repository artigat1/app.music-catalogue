import {Component, Input, OnInit} from '@angular/core';

import {Music} from '../../shared/models';

@Component({
  selector: 'music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input()
  music: Music;

  constructor() {
  }

  ngOnInit() {
  }

}
