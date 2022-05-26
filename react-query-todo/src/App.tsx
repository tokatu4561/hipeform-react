import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <BrowserRouter>
        <Switch> 
        </Switch>
      </BrowserRouter>
  </div>
  );
}

export default App;
