import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Adal4Service } from 'adal-angular4';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private adalSvc: Adal4Service) {
    this.adalSvc.init(environment.adalConfig);
  }

  public ngOnInit() {
    console.log('Initial App State');
    this.adalSvc.handleWindowCallback();
  }
}
