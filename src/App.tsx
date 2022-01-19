import React, { useContext, useState } from 'react';
import './App.css';
import CreateProfileScreen from './components/panels/signin/pCreateProfileScreen';
import SuperProvider from './components/wrappers/wProviderWrapper';
import NavigationBar from './components/element/eNavigationBar';
import ScreenSwitcher from './components/wrappers/wConnectionSwitcher';




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SuperProvider>
            <ScreenSwitcher/>
        </SuperProvider>
      </header>
    </div>
  );
}

export default App;
