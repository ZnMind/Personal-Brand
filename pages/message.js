import React, { useState, useEffect } from 'react';
import MessageCard from '@components/MessageCard';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import Footer from '@components/Footer';
import Anchor from '@components/Anchor';
import ReplyCard from '@components/ReplyCard';

const Message = () => {
    const [data, setData] = useState([]);
    const [replies, setReplies] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");
    const [time, setTime] = useState("");
    const [toggle, setToggle] = useState("");

    useEffect(() => {
        fetch("https://vercel-express-znmind.vercel.app/api/message")
            .then(res => res.json())
            .then(details => {
                var date;
                for (let i = 0; i < details.length; i++) {
                    date = Date.parse(details[i]._created)
                    details[i]._created = new Date(date).toString().split("G")[0]
                }
                setData(details)
            })
        fetch("https://vercel-express-znmind.vercel.app/api/message/reply/all")
            .then(res => res.json())
            .then(details => {
                var date;
                for (let i = 0; i < details.length; i++) {
                    date = Date.parse(details[i]._created)
                    details[i]._created = new Date(date).toString().split("G")[0]
                }
                setReplies(details);
            })
    }, []);

    const handleName = event => {
        setName(event.target.value);
        let time = new Date().getTime();
        let date = new Date(time);
        setTime(date.toString().split("G")[0]);
    }

    const handleMessage = event => {
        setMessage(event.target.value);
        let time = new Date().getTime();
        let date = new Date(time);
        setTime(date.toString().split("G")[0]);
    }

    const handleUser = event => {
        setUser(event.target.value);
    }

    const handleSubmit = () => {
        document.getElementById("submitBtn").disabled = true;
        if (name && message) {
            let payload = {
                name: name,
                message: message
            }
            fetch("https://vercel-express-znmind.vercel.app/api/message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })
                .then(fetch("https://vercel-express-znmind.vercel.app/api/message")
                    .then(res => res.json())
                    .then(details => {
                        var date;
                        for (let i = 0; i < details.length; i++) {
                            date = Date.parse(details[i]._created)
                            details[i]._created = new Date(date).toString().split("G")[0]
                        }
                        setData(details)
                    }))
            setTimeout(() => window.location.href = "/message", 1000);
        }
    }

    const handleSortBy = () => {
        fetch(`https://vercel-express-znmind.vercel.app/api/message/${user}`)
            .then(res => res.json())
            .then(details => {
                var date;
                for (let i = 0; i < details.length; i++) {
                    date = Date.parse(details[i]._created)
                    details[i]._created = new Date(date).toString().split("G")[0]
                }
                setData(details)
            })
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <Navbar />
            <Head><title>Messages - Dan Mann</title></Head>
            <div className="App">
                <header className="App-header">
                    <div className='message-container'>
                        <div className='left'>
                            <h4>Please leave a message!</h4>

                            <input placeholder='Name' onChange={handleName} maxLength="50" id="textfield1"></input>
                            <input placeholder='Message (140 char max)' onChange={handleMessage} maxLength="140" id="textfield2"></input>
                            <button onClick={handleSubmit} id="submitBtn">Submit</button>
                            <input placeholder='Sort by Username' onChange={handleUser}></input>
                            <div className='button-container'>
                                <button onClick={handleSortBy}>Sort</button>
                                <button onClick={() => window.location.href = "/message"}>All</button>
                            </div>
                            <Anchor
                                text="Vercel Server"
                                href="https://github.com/ZnMind/Vercel-Express"
                                className="anchor-link-sm"
                            />
                            <Anchor
                                text="Page Source"
                                href="https://github.com/ZnMind/Personal-Brand/blob/main/pages/message.js"
                                className="anchor-link-sm"
                            />
                        </div>
                        <div className='right'>
                            {name || message
                                ? <MessageCard
                                    username={name}
                                    message={message}
                                    created={time}
                                />
                                : ""}

                            {data.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <MessageCard
                                            key={`${index}card`}
                                            replyId={data.id}
                                            username={data.username}
                                            message={data.message}
                                            created={data._created}
                                            toggle={toggle}
                                            onClick={handleToggle}
                                        />
                                        {replies.map((rep, index) => {
                                            return (
                                                data.id == rep.replyid ?
                                                    <div key={index}>
                                                        <ReplyCard
                                                            username={rep.username}
                                                            message={rep.message}
                                                            created={rep._created}
                                                        />
                                                    </div> :
                                                    ""
                                            );
                                        })}
                                    </div>
                                )
                            })}
                            <div className='bott'></div>
                        </div>
                    </div>
                </header>
            </div>
            <Footer />
        </>
    );
}

export default Message;