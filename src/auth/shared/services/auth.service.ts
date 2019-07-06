import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

// rxJs Operator
import { tap } from 'rxjs/operators';

// ngRx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../src/app/store/reducers';
import * as fromProfileActions from '../../../../src/app/store/actions/profile.action';

export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}
@Injectable()
export class AuthService {

  auth$ = this.af.authState
            .pipe(tap(next => {
              if (!next) {
                // TODO: reset to initial state instead of passing null
                this.store.dispatch(new fromProfileActions.loadProfile({
                  email: null,
                  uid: null,
                  authenticated: false
                }));
                return;
              }

              const user: User = {
                email: next.email,
                uid: next.uid,
                authenticated: true
              };

              this.store.dispatch(new fromProfileActions.loadProfile(user));

            }),
          );

  constructor(
    private af: AngularFireAuth,
    private afdb: AngularFireDatabase,
    private store: Store<fromRoot.ProfileState>
  ) { }

  createUser(email: string, password: string) {
    return this.af.auth
        .createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth
        .signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return this.af.auth.signOut();
  }
}
