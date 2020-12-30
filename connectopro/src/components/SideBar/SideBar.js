import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './SideBar.css';

function SideBar() {

    let user = useSelector(selectUser);
    let recentItem = (topic) => (
        <div className="sideBar__recentItem">
            <span className="sideBar__hash">#</span>
            <p>{topic}</p>
        </div>    
    )

    return (
        <div className="sideBar">
            <div className="sideBar__top">
                <img 
                    src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=
                        MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=
                        format&fit=crop&w=750&q=80" 
                    alt=""/>
                <Avatar src={user.photoUrl} className="sideBar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sideBar__stats">
                <div className="sideBar__stat">
                    <p>Who viewed you</p>
                    <p className="sideBar__statNumber">2,543</p>
                </div>
                <div className="sideBar__stat">
                    <p>Views on post</p>
                    <p className="sideBar__statNumber">2,448</p>
                </div>
            </div>

            <div className="sideBar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default SideBar;
