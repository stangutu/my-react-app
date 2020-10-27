import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <AmplifySignOut />
          Edit <code>src/App.js</code> and save to reload.
	  This is Sankar's  react project from new PC!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
