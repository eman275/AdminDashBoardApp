import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth0Config from './auth0-config'; 

ReactDOM.render(
  <Router>
    <Auth0Provider
      domain={Auth0Config.domain}
      clientId={Auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      // redirectUri={window.location.origin} 
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById('root')
);
