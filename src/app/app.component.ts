import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angulardemo';

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private titleService: Title
    ) {
    iconRegistry.addSvgIcon('react', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/react-brands.svg'));
    iconRegistry.addSvgIcon('vue', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/vuejs-brands.svg'));
  }

  ngOnInit(): void {
    this.titleService.setTitle('Home');
  }
}
