import React from 'react';
import styles from './styles.module.css'
import { useChat } from '../context/ChatContext'
import ChatItem from './ChatItem';
import ScroolableFeed from 'react-scrollable-feed';
function ChatList() {
    const { messages } = useChat();
    return <div className={styles.chatlist}>
        <ScroolableFeed forceScroll={true}>
            {
                messages.map((item, key) => (
                    <ChatItem key={key} item={item} />
                ))
            }
        </ScroolableFeed>
    </div>
}

export default ChatList;
