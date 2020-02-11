import React from 'react';

import './styles.css';

export default function SingleComment({data}) {
  const { author, content } = data;
  return (
    <div className="comment">
      <div className="authorBallon">
        <img src={author.avatar} alt=""/>
      </div>
      <div className="authorTyped">
        <strong>{author.name}</strong>
        {content}
      </div>
    </div>
  );
}
