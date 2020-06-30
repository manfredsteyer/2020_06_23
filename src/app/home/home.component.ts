import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit(): void {
//    console.debug('claims', this.oauthService.getIdentityClaims());
  }

  get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (claims) {
      return claims['given_name'];
    }
    return null;
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  get refreshToken(): string {
    return this.oauthService.getRefreshToken();
  }

  refresh(): void {
    this.oauthService.refreshToken();
  }

  logout(): void {
    this.oauthService.logOut();
    //this.oauthService.revokeTokenAndLogout();
  }

}
