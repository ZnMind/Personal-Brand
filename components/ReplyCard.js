import React, { useState } from 'react'
import style from './card.module.css';

const MessageCard = ({ username, message, created }) => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            {toggle ?
                <div className={style.replycard}>
                    <div className={style.column1}>
                        <h5>{username}</h5>
                    </div>
                    <div className={style.column}>
                        <p>{message}</p>
                        <p className={style.small}>{created}</p>
                    </div>
                    {/* <div>
                        <button onClick={handleToggle}>Hide</button>
                    </div> */}
                </div> :
                <div className={style.replycard}>
                    <div className={style.column1}></div>
                    <div className={style.column}></div>
                    {/* <div>
                        <button onClick={handleToggle}>Show</button>
                    </div> */}
                </div>}
        </>

    )
}

export default MessageCard;