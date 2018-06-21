interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'QWgVl28tvgr2rKGdCa3KVa3XZ7MWMzSR',
  domain: 'sprints.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
