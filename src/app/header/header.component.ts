import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(private dataStorageServ: DataStorageService, private authService: AuthService) {}

  onSave() {
    this.dataStorageServ.storeRecipes().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onFetch() {
    this.dataStorageServ.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
