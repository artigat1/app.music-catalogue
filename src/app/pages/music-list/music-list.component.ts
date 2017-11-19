import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {Music} from '../../shared/interfaces';
import * as fromApp from '../../store/reducers';
import * as fromAuth from '../../store/reducers/auth.reducer';

@Component({
  selector: 'music-list-page',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  music$: Observable<Music[]>;
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.music$ = this.getMusic();
    this.isLoggedIn$ = this.store.select(fromAuth.isLoggedIn);
  }

  private getMusic(): Observable<Music[]> {
    const testData: Music[] = [
      {
        id: '1',
        title: 'Les Miserables',
        composer: ['Claude-Michel Schonberg'],
        lyricist: ['Alain Boublil', 'Herbert Kretzmer'],
        cast: 'Original London Cast',
        recordingDate: '15th Sep 2017',
        artists: ['Colm Wilkinson', 'Roger Alam', 'Patti LuPone', 'Frances Ruffelle'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61W72QDB4ML.gif'
      },
      {
        id: '2',
        title: 'Miss Saigon',
        composer: ['Claude-Michel Schonberg'],
        lyricist: ['Alain Boublil'],
        cast: 'Original London Cast',
        releaseYear: 1989,
        artists: ['Lea Salonga', 'Simon Bowman', 'Peter Polycarpou', 'Claire Moore'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/711Hi5vy8GL._SL1200_.jpg'
      },
      {
        id: '3',
        title: 'Martin Guerre',
        composer: ['Claude-Michel Schonberg'],
        lyricist: ['Alain Boublil'],
        cast: 'Original London Cast',
        releaseYear: 1996,
        artists: ['Iain Glenn', 'Matt Rawle', 'Rebecca Locke'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91eVnaEE45L._SL1369_.jpg'
      },
      {
        id: '4',
        title: 'Sunset Boulevard',
        composer: ['Andrew Lloyd Webber'],
        lyricist: ['Christopher Hampton', 'Don Black'],
        cast: 'Original London Cast',
        releaseYear: 1993,
        artists: ['Patti LuPone', 'Kevin Anderson', 'Meredith Braun', 'Daniel Benzali'],
        imageUrl: 'http://www.dresscircle.com/9854-thickbox_default/sunset-boulevard-original-london-cast-cd.jpg'
      },
      {
        id: '5',
        title: 'Return To The Forbidden Planet',
        composer: ['Various'],
        lyricist: ['Various'],
        cast: 'Original London Cast',
        releaseYear: 1989,
        artists: ['John Ashby', 'Matthew Devitt', 'Kate Edgar', 'Nicky Furre', 'Alison Harding'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61R0K4XPWBL.jpg'
      },
      {
        id: '2',
        title: 'Miss Saigon',
        composer: ['Claude-Michel Schonberg'],
        lyricist: ['Alain Boublil'],
        cast: 'Original London Cast',
        releaseYear: 1989,
        artists: ['Lea Salonga', 'Simon Bowman', 'Peter Polycarpou', 'Claire Moore'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/711Hi5vy8GL._SL1200_.jpg'
      },
      {
        id: '5',
        title: 'Return To The Forbidden Planet',
        composer: ['Various'],
        lyricist: ['Various'],
        cast: 'Original London Cast',
        releaseYear: 1989,
        artists: ['John Ashby', 'Matthew Devitt', 'Kate Edgar', 'Nicky Furre', 'Alison Harding'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61R0K4XPWBL.jpg'
      },
      {
        id: '3',
        title: 'Martin Guerre',
        composer: ['Claude-Michel Schonberg'],
        lyricist: ['Alain Boublil'],
        cast: 'Original London Cast',
        releaseYear: 1996,
        artists: ['Iain Glenn', 'Matt Rawle', 'Rebecca Locke'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91eVnaEE45L._SL1369_.jpg'
      },
      {
        id: '4',
        title: 'Sunset Boulevard',
        composer: ['Andrew Lloyd Webber'],
        lyricist: ['Christopher Hampton', 'Don Black'],
        cast: 'Original London Cast',
        releaseYear: 1993,
        artists: ['Patti LuPone', 'Kevin Anderson', 'Meredith Braun', 'Daniel Benzali'],
        imageUrl: 'http://www.dresscircle.com/9854-thickbox_default/sunset-boulevard-original-london-cast-cd.jpg'
      },
      {
        id: '4',
        title: 'Sunset Boulevard',
        composer: ['Andrew Lloyd Webber'],
        lyricist: ['Christopher Hampton', 'Don Black'],
        cast: 'Original London Cast',
        releaseYear: 1993,
        artists: ['Patti LuPone', 'Kevin Anderson', 'Meredith Braun', 'Daniel Benzali'],
        imageUrl: 'http://www.dresscircle.com/9854-thickbox_default/sunset-boulevard-original-london-cast-cd.jpg'
      },
    ];

    return Observable.of(testData);
  }
}
