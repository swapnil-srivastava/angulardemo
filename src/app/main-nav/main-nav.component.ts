import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Store
import * as fromRoot from '../store/reducers';
import { Store, select } from '@ngrx/store';
import { AuthService } from '../../../src/auth/shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {

  user$: Observable<any>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isOpen: boolean = true ;
  otherTheme: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<fromRoot.ProfileState>,
    private authService: AuthService,
    private router: Router,
    private af: AngularFireAuth,
    private afdb: AngularFireDatabase,
    private fs: AngularFirestore) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromRoot.getProfile));
  }

  activateDarkTheme() {
    this.otherTheme = !this.otherTheme;
    // const cUser = this.af.auth.currentUser;
    // const user$ = this.afdb.list(`users/${cUser.uid}`).push({name: 'Swapnil ', email: 'check1@test.com'});
    // this.fs.collection(`details`).add({
    //   name: 'Swapnil Srivastava',
    //   email: 'swapnil@firestore.com'
    // });
  }

  getData() {
    // const cUser = this.af.auth.currentUser;
    // const user$ = this.afdb.list(`users/${cUser.uid}`).valueChanges().subscribe((val) => {
    //   console.log('user', val); // working
    // });

    // const user$ = this.fs.collection('details').valueChanges().subscribe(val => console.log('val in firestore', val)); // working firestore
    // const us$ = this.fs.collection('details').snapshotChanges()
    //                     .subscribe(val => console.log('val in snapshot firestore', val)); // working firestore
  }

  async logout() {
    await this.authService.logoutUser();
    // this.router.navigate(['/about']);
  }

}
