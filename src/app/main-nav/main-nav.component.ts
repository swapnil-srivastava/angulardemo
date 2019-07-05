import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Store
import * as fromRoot from '../store/reducers';
import { Store, select } from '@ngrx/store';
import { AuthService } from 'src/auth/shared/services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromRoot.getProfile));
  }

  activateDarkTheme() {
    this.otherTheme = !this.otherTheme;
  }

  async logout() {
    await this.authService.logoutUser();
    // this.router.navigate(['/about']);
  }

}
