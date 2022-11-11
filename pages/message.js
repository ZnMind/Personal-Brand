import React, { useState, useEffect } from 'react';
import MessageCard from '@components/MessageCard';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Message = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");
    const [time, setTime] = useState("");

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
        console.log(user);
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

    return (
        <>
            <Navbar />
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
                                            username={data.username}
                                            message={data.message}
                                            created={data._created}
                                        />
                                    </div>

                                )
                            })}

                        </div>
                    </div>
                </header>
            </div>
            <Footer />
        </>
    );
}

export default Message;