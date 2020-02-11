import React from 'react';

import './styles.css';
import SingleComment from '../SingleComment';

export default function SinglePost({data}) {
  const { author, date, content, comments } = data;
  return (
    <div className="redPost" >
      <div className="author">
        <img src={author.avatar} alt=""/>
        <span>
          <strong>{author.name}</strong>
          <small className="data">{date}</small>
        </span>
      </div>
      <div className="postContent">
        <p>{content}</p>
        <div className="comments">
          {comments.map( (comment) => (
            <SingleComment key={comment.id} data={comment} />
          ) )}
        </div>
      </div>
    </div>
  );
}
