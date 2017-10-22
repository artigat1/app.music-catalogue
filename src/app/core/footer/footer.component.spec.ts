import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {SharedModule} from '../../shared/shared.module';
import {FooterBarComponent} from './footer.component';

describe('Footer Bar Component', () => {
  let component: FooterBarComponent;
  let fixture: ComponentFixture<FooterBarComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterBarComponent],
      imports: [RouterTestingModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render copyright year', async(() => {
    expect(nativeElement.querySelector('div > span:first-child').textContent)
      .toContain(new Date().getFullYear().toString());
  }));

  it('should render a login link', async(() => {
    expect(nativeElement.querySelector('a[href*="login"]')).toBeTruthy();
  }));
});
