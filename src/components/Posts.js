import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="d-flex flex-row justify-content-center mt-5 mb-5">
      <ul class="list-group w-50">
        {posts?.map((post) => {
          return (
            <li className="list-group-item" key={post.id}>
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
