import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Music } from '@shared/interfaces';

@Component({
    selector: 'music-card',
    templateUrl: './music-card.component.html',
    styleUrls: ['./music-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicCardComponent {
    @Input() music: Music;

    @Input() isAdmin: boolean;
}
