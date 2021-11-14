import React, {useState, useEffect} from 'react';
import { Posts } from './Posts';
export const MessageContainer:React.FC<any> = (data?:any) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(data.data);
    }, [posts]);

    if (data) return(
        <div>
            {
                posts.map((post:any) => {
                    return <Posts {...post} key={post.postId} />
                })
            }
        </div>
    ) 
    else return (<div></div>)
}