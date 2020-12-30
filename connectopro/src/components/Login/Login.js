import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import './Login.css';
import { auth } from '../../DataLayerConfig/Firebase';
import login from '../../features/userSlice';

function Login() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [name, setName] = useState('');
    let [profilePic, setProfilePic] = useState('');
    let dispatch = useDispatch();

    let registerUser = (event) => {
        if(!name){
            return alert('Please enter full name');
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }));
            });
        }).catch((error) => {
            alert(error.message);
        }); 
    };

    let loginToApp = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL
            }));
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="login">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png" alt=""/>
        
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name(required if registering)" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile Pic URL(optional)" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>
                Not a Member?{" "}
                <span className="login__register" onClick={registerUser}>Register Now</span>
            </p>
        </div>
    )
}

export default Login;
