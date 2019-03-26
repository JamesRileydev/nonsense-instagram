import React from 'react';
import Comment from './Comments';

const CommentSection = props => {
    return (
        <div>
            {props.toast.map(c => (
                <Comment key={c.id} username={c.username} text = {c.text} />
            ))}
        </div>
    )
}

export default CommentSection;