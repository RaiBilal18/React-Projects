import { useContext, useEffect, useState } from "react";
import { PostlistContext } from "../store/Post-list-store";
import WellcomeMessage from "./WellcomeMessage";
import Post from "./Post";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const postlist = useLoaderData();
  return (
    <>
      {postlist.length === 0 && <WellcomeMessage></WellcomeMessage>}
      {postlist.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export const postloader = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  {
    try {
      if (!response.ok) {
        console.log("Response not properly shown");
      }
      const data = await response.json();
      return data.posts;
    } catch (error) {
      console.log("the error is ", error);
      throw error;
    }
  }
};
export default PostList;
