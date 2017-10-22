import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {MusicCardListComponent} from './music-card-list.component';
import {MusicCardComponent} from '../music-card/music-card.component';
import {CoreModule} from '../../core/core.module';
import {SharedModule} from '../../shared/shared.module';

describe('MusicCardListComponent', () => {
  let component: MusicCardListComponent;
  let fixture: ComponentFixture<MusicCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MusicCardListComponent, MusicCardComponent],
      imports: [RouterTestingModule, SharedModule, CoreModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
