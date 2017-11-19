import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMusicComponent } from './add-new-music.component';

describe('AddNewMusicComponent', () => {
  let component: AddNewMusicComponent;
  let fixture: ComponentFixture<AddNewMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
