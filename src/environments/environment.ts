// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// https://spikesapps.wordpress.com/2017/07/27/securing-an-angular-application-with-azure-ad/

export const environment = {
  production: false,
  adalConfig: {
    tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
    clientId: 'fc8d49ce-e369-4f6b-ab8c-d83e132e9c87',
    postLogoutRedirectUri: 'http://localhost:4200',
    endpoints: {
      'https://starresidentz-angular.azurewebsites.net': 'https://starresidentz-angular.azurewebsites.net',
    },
  },
  apiUrl: 'https://starresidentz-angular.azurewebsites.net/api/'
};
