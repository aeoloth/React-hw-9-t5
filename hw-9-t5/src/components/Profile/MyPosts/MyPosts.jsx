import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove</button>
      </div>
      <div>
        <Post message='Hi, how r u?'/>
        <Post  message='it_s my first post'/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;