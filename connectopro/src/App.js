import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SideBar from './components/SideBar/SideBar';
import Widgets from './components/Widgets/Widgets';
import { auth } from './DataLayerConfig/Firebase';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  let user = useSelector(selectUser);
  let dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if( userAuth ){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
        <Header />
        
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        )}
    </div>
  );
}

export default App;
