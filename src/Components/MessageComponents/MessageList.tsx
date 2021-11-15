import React from "react";
import { receiveMessageOnPort } from "worker_threads";

export const MessageList: React.FC<any> = (post:any) => {

    return(
        <div>
            <h2>{post.receiver.username}</h2>
        </div>
    )
}