import React from 'react';
import GenericData from './GiphySearch';
import SpinLoad from './SpinLoad';

const userToken = 'EAACEdEose0cBABx21nzexaKZCZCZBAuxNPiCKk26fpqbf6HajQZAPYkzDqocnEmoWPVlCt8VBA64SxXM2S4ZAg11s6XUzE4kCZCXuwLjHvMHea4zYbCCvfd67geYZBJMtRjqOZA3LilQtKJGQHZCgXIRiXnu7lVeExYPVODo5QY3bBM0opy3q6kNIQgchcDDQwrTEuNsk7yxy4wZDZD';
const App = () => (
  <div>
    <h1>FB Graph API</h1>
    <h3>Get user access token from <a href="https://developers.facebook.com/tools/explorer" target="_blank">Graph Api Explorer</a></h3>
    <GenericData initialQuery={userToken} RenderLoading={SpinLoad} />
  </div>
);

export default App;
