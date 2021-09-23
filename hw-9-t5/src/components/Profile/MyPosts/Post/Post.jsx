import React from "react";

const Post = (props) => {

  return (
    <div className="item">
      <img src="https://uprostim.com/wp-content/uploads/2021/05/image005-8.jpg" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
