import React, { useState } from 'react'
import style from './card.module.css';

const MessageCard = ({ replyId, username, message, created }) => {
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
        if (name && reply) {
            let payload = {
                replyId: replyId,
                name: name,
                message: reply
            }
            fetch("https://vercel-express-znmind.vercel.app/api/message/reply/all", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })
            setTimeout(() => window.location.href = "/message", 1000);
        }
    }

    return (
        <div className={style.card}>
            <div className={style.column1}>
                <h5>{username}</h5>
            </div>
            <div className={style.column}>
                <p>{message}</p>
                <p className={style.small}>{created}</p>
                {toggle ?
                    <div className={style.reply}>
                        <input placeholder='Name' onChange={handleName} maxLength="50" id="textfield1" className={style.inputs}></input>
                        <input placeholder='Reply (140 char max)' onChange={handleReply} maxLength="140" id="textfield2" className={style.inputs}></input>
                        <div className='button-container'>
                            <button onClick={handleSubmit} id="submitBtn" className={style.buttons}>Submit</button>
                            <button onClick={handleToggle} className={style.buttons}>Cancel</button>
                        </div>
                    </div> :
                    <button onClick={handleToggle} className={style.buttons}>Reply</button>
                }
            </div>
        </div>
    )
}

export default MessageCard;