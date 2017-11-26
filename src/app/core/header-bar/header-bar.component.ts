import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderBarComponent implements OnInit {
    title = `Music Catalogue`;
    searchPlaceholder = `What are you looking for?`;

    query = new FormControl();

    constructor() {}

    ngOnInit() {
        this.query.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(value => {
                if (value) {
                    console.log(`go search for "${this.query.value}`);
                }
            });
    }
}
