import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import * as fromRoot from './store/reducers';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { User, AuthService } from 'src/auth/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<{}>;
  subscription: Subscription;

  title = 'angulardemo';

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private titleService: Title,
    private authService: AuthService,
    private store: Store<fromRoot.ProfileState>
    ) {
    iconRegistry.addSvgIcon('react', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/react-brands.svg'));
    iconRegistry.addSvgIcon('vue', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/vuejs-brands.svg'));
  }

  ngOnInit(): void {
    this.titleService.setTitle('Home');
    this.subscription = this.authService.auth$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
