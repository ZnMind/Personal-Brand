import React, { useState } from 'react'
import style from './card.module.css';

const MessageCard = ({ username, message, created }) => {
    const [toggle, setToggle] = useState(false);
    const [name, setName] = useState("");
    const [reply, setReply] = useState("");

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleName = event => {
        setName(event.target.value);
    }

    const handleReply = event => {
        setReply(event.target.value);
    }

    const handleSubmit = () => {
        console.log("Sub")
    }

    return (
        <>
        <div className={style.replycard}>
            <div className={style.column1}>
                <h5>{username}</h5>
            </div>
            <div className={style.column}>
                <p>{message}</p>
                <p className={style.small}>{created}</p>
            </div>
        </div>
        </>
    )
}

export default MessageCard;