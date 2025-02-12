import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post';
import { db } from '../../DataLayerConfig/Firebase';
import { selectUser } from '../../features/userSlice';
import FlipMove from "react-flip-move";
import firebase from 'firebase';

function Feed() {

    let user = useSelector(selectUser);
    let [input, setInput] = useState([]);
    let [posts, setPosts] = useState([]);

    let sendPost = (event) => {
        event.preventDefault();
        db.collection('Posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('');
    };

    useEffect(() => {
        db.collection('Posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc =>(
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))))
        ));
    }, []);

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption 
                        Icon={ImageIcon}
                        title='Photo'
                        color="#70B5F9"
                    />
                    <InputOption 
                        Icon={SubscriptionsIcon}
                        title='Video'
                        color="#E7A33E"
                    />
                    <InputOption 
                        Icon={EventNoteIcon}
                        title='Event'
                        color="#COCBCD"
                    />
                    <InputOption 
                        Icon={CalendarViewDayIcon}
                        title='Write Article'
                        color="#7FC15E"
                    />
                </div>
            </div>

            {/* Posts Section */}
            <FlipMove>
                {posts.map(({id, data: { name, description, message, photoUrl }}) => (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed;