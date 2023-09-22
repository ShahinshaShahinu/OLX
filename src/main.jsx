
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { auth, db, storage } from './firebase/config.jsx';
import './index.css';

import Context, { FirebaseContext } from './store/FirebaseContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{ db, auth, storage }}>
    <Context>

      <App />
    </Context>


  </FirebaseContext.Provider>

)




// fire base app global aayi providecheythu , auth,db,storeage  
// app nte ullil ninn evidunn call cheythalum ee context kittum

// context is componet  ,child is APP