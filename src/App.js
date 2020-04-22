import React from 'react';
import AppHolder from '../src/components/AppHolder/AppHolder'
import {HashRouter} from 'react-router-dom'

/**
 * Escuchar la sesión de usuario acá
 */

const App = () => {
  
  return (
    <HashRouter className="App">
     {/**context provider here */}
        <AppHolder />
    </HashRouter>
  );

}

export default App;
