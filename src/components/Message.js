import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import Button from '@mui/material/Button';
import styles from "../styles/chatbox.module.css";


function Message() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <div className={styles.msgdiv}>
            <Button className={styles.signOutButton}
             onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
            <div className={styles.msgs}>
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img className={styles.imgchat} src={photoURL} alt="" />
                            <div className={styles.pchat}>{text}</div>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} /> 
             <div ref={scroll}></div>
        </div>
    )
}

export default Message