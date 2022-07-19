import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { User } from './types';


function App() {
  
  const [user, setUser] = useState<User>({kind: 'loggedOut'})

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
