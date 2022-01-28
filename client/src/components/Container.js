import { useEffect } from 'react';
import ChatForm from './ChatForm';
import ChatList from './ChatList';
import { init, subscribeChat, subscribeInıtMessage } from '../socketApi'
import { useChat } from '../context/ChatContext'
function Container() {
    const { setMessages } = useChat();
    useEffect(() => {
        init();

        subscribeInıtMessage((messages) =>
            setMessages(messages)
        )
        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, { message }])
        });

    }, [])
    return (
        <div className='App' >
            <ChatList />
            <ChatForm />
        </div>
    );
}

export default Container;
