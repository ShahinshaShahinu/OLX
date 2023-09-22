
import { useContext, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup/Signup';
import Create from './Pages/Create';
import Home from './Pages/Home';
import Login from './Pages/Login';
import View from './Pages/ViewPost';
import { auth } from './firebase/config';
import { authContext } from './store/FirebaseContext';

import Post from './store/PostContext';


function App() {
  const [count, setCount] = useState(0)

  const { setUser } = useContext(authContext)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })


  }, [setUser]);



  //user checking login



  return (
    <>
      <div>

        <Post>

          <Router>
            <Routes>
              <Route Component={Home} path="/" />
              <Route Component={Signup} exact path='/Signup' />
              <Route Component={Login} path='/login' />
              <Route Component={Create} path='/Create' />
              <Route Component={View} path='/View' />
            </Routes>
          </Router>

        </Post>





      </div>
    </>
  )
}

export default App
