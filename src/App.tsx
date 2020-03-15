import React from 'react';
import './App.css';
import { MyNavbar } from './components/Navbar'
import { MyDatePicker } from './components/DatePicker'
import { MyGallery } from './components/Gallery'
import { useAuth0 } from './auth0'


function App() {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0()

  if (loading) {
    return <p>Now Loading...</p>
  } else if (!isAuthenticated) {
    loginWithRedirect({})
    return <p>Redirect...</p>
  }

  return (
    <div className="App">
      <MyNavbar />
      <div className="App-contents">
        <MyDatePicker />
        <MyGallery />
      </div>
    </div>
  );
}

export default App;
