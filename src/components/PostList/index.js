import React from 'react';
import PostCard from '../PostCard';
import './style.scss';

const PostList = ({items}) => {
    return (
        <ul className="post-list">
            {items.map((item, i) => (
                <li key={i}>
                    <PostCard data={item} />
                </li>
            ))}
        </ul>
    );
}

export default PostList;