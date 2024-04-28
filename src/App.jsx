

import React, { useState } from "react";
import Login from  './Login'
import Graphs from './Graphs'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
   
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Graphs />}
    </div>
  );
}

export default App;
