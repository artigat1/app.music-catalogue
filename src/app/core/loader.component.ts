import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'note-loader',
    template: `
    <div class="notes-loader" *ngIf="visible">
      <div class="note"></div>
    </div>
  `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
    @Input() visible: boolean;
}
