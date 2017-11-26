import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'footer-bar',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBarComponent {
    @Input() isLoggedIn: boolean;

    year = new Date().getFullYear();
}
