import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div>
            <h3>{ props.p.username }</h3>
            <CommentSection toast={props.p.comments}/>
        </div>
    )
}

export default Post;