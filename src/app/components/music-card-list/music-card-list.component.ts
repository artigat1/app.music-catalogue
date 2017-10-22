import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Music} from '../../shared/models';

@Component({
  selector: 'music-card-list',
  templateUrl: './music-card-list.component.html',
  styleUrls: ['./music-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicCardListComponent {

  @Input()
  music: Music[];

  @Input()
  isLoggedIn: boolean;

  /**
   * Should the card be displayed.
   * If the recording date is set, then only logged in user's can see the card.
   * @returns {boolean}
   */
  displayCard(music: Music): boolean {
    if (music.recordingDate) {
      return !!(this.isLoggedIn);
    }

    return true;
  }

}
