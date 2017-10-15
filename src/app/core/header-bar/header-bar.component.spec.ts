import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderBarComponent} from './header-bar.component';
import {SharedModule} from '../../shared/shared.module';

describe('Header Bar Component', () => {
  let component: HeaderBarComponent;
  let fixture: ComponentFixture<HeaderBarComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBarComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    expect(nativeElement.querySelector('h1').textContent).toContain('Music Catalogue');
  }));

  it('should render search text in input box', async(() => {
    expect(nativeElement.querySelector('input').getAttribute('placeholder')).toContain('What are you looking for?');
  }));

  it('should have a search button', async(() => {
    expect(nativeElement.querySelector('button').textContent).toEqual('Search');
  }));
});
