import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Music} from '../../../shared/interfaces/music.interface';

@Component({
  selector: 'music-edit-form',
  templateUrl: './music-edit-form.component.html',
  styleUrls: ['./music-edit-form.component.scss']
})
export class MusicEditFormComponent implements OnInit {

  @Input()
  music: Music;

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(values: any): void {
    const music = this.mapFormValuesToMusic(values);
    console.log(`add new music`, music);
  }

  private initForm(): void {
    let title = '';
    let imageUrl = '';
    let composer = '';
    let lyricist = '';
    let artists = '';
    let releaseYear = new Date().getFullYear();
    let recordingDate = '';
    let cast = '';

    if (this.music) {
      title = this.music.title;
      imageUrl = this.music.imageUrl;
      releaseYear = this.music.releaseYear;
      recordingDate = this.music.recordingDate;
      cast = this.music.cast;

      composer = this.music.composer ? this.music.composer.join(', ') : '';
      lyricist = this.music.lyricist ? this.music.lyricist.join(', ') : '';
      artists = this.music.artists ? this.music.artists.join(', ') : '';
    }

    this.form = this.fb.group({
      title: [title, Validators.required],
      imageUrl: [imageUrl],
      composer: [composer, Validators.required],
      lyricist: [lyricist, Validators.required],
      artists: [artists, Validators.required],
      releaseYear: [releaseYear],
      recordingDate: [recordingDate],
      cast: [cast, Validators.required]
    });
  }

  private mapFormValuesToMusic(values: any): Music {
    const music: Music = {
      title: values.title,
      cast: values.cast,
      imageUrl: values.imageUrl,
      releaseYear: values.releaseYear,
      recordingDate: values.recordingDate,
      artists: []
    };

    if (values.composer) {
      music.composer = values.composer
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');
    }

    if (values.lyricist) {
      music.lyricist = values.lyricist
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');
    }

    if (values.artists) {
      music.artists = values.artists
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');
    }

    return music;
  }
}
