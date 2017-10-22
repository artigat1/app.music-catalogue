// import {async, ComponentFixture, TestBed} from '@angular/core/testing';
//
// import {MusicListComponent} from './music-list.component';
// import {StoreModule} from '@ngrx/store';
//
// import * as fromApp from '../../store/reducers';
// import {SharedModule} from '../../shared/shared.module';
// import {CoreModule} from '../../core/core.module';
// import {MusicCardListComponent} from '../../components/music-card-list/music-card-list.component';
// import {MusicCardComponent} from '../../components/music-card/music-card.component';
// import {RouterTestingModule} from '@angular/router/testing';
//
// describe('MusicListComponent', () => {
//   let component: MusicListComponent;
//   let fixture: ComponentFixture<MusicListComponent>;
//
//   beforeEach(async(() => {
//     const mockState: fromApp.State = {
//       auth: {
//         user: {email: 'test@example.com'}
//       },
//       ui: {loading: false}
//     };
//
//     TestBed.configureTestingModule({
//       declarations: [MusicListComponent, MusicCardListComponent, MusicCardComponent],
//       imports: [
//         StoreModule.forRoot(mockState),
//         CoreModule,
//         RouterTestingModule,
//         SharedModule
//       ]
//     }).compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(MusicListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
