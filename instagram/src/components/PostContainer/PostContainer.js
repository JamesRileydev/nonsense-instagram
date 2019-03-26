import React from 'react';
import Post from './Post';

const PostContainer = props => {
    console.log(props);
    return(
        <div>{props.almond.map(p => (
            <Post key={p.id} p={p} />
        ))}
        </div>
    )
}

export default PostContainer;