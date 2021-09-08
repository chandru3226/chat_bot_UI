import React , { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import Iframe from 'react-iframe'
function App() {
  const [showBot, toggleBot] = useState(false);
  
  const saveMessages = (messages) => {

    localStorage.setItem("chat_messages", JSON.stringify(messages));
    messages.id = 5;
    console.log(messages)
  
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    console.log(messages);
    return messages;
  };
  const deleteMessages = (messages) => {
    localStorage.setItem("chat_messages", null);
    const temp = JSON.parse(localStorage.getItem('messageHistory'));
    console.log(temp)
  };
  return (
    <div className="App">
      <header className="App-header">
        {showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
          />
        )}
        <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
        <button onClick={deleteMessages} >Delete</button>
      </header>
      <Iframe url="https://6901-122-164-116-26.ngrok.io/"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}
export default App;
