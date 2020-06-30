import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://dev-g-61sdfs.eu.auth0.com/',
 
    logoutUrl: 'https://dev-g-61sdfs.eu.auth0.com/v2/logout',
    postLogoutRedirectUri: window.location.origin,
     
    redirectUri: window.location.origin,
 
    clientId: 'opHt1Tkt9E9fVQTZPBVF1tHVhjrxvyVX',
 
    responseType: 'code',

    scope: 'openid profile email offline_access', // 
 
    customQueryParams: {
        audience: 'http://www.angular.at/api'
    }
 
    // Not recommented:
};