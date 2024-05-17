import React, { useEffect } from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    useEffect(() => {
        console.log('ChatsPage mounted or user changed:', props.user);
    }, [props.user]);

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="93e07768-5181-453e-8401-bbdf64af1a1b"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />
        </div>
    );
};

export default ChatsPage;
