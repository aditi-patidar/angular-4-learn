import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAIGUKk17_F414hVfxFEBrzWQcmuHz41SQ',
      authDomain: 'ng-recipe-book-d2666.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature =  feature;
  }
}
