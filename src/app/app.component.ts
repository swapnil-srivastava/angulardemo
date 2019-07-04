import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardemo';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('react', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/react-brands.svg'));
    iconRegistry.addSvgIcon('vue', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/vuejs-brands.svg'));
  }
}
