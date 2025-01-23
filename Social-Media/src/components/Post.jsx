import { FaDeleteLeft } from "react-icons/fa6";
import { PostlistContext } from "../store/Post-list-store";
import { useContext } from "react";
const Post = ({ post }) => {
  let { deletePost } = useContext(PostlistContext);
  return (
    <div className="card cardstyling" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <FaDeleteLeft />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span className="badge text-bg-primary tagstyling" key={index}>
            {tag}
          </span>
        ))}
        <div className="alert alert-primary reactions" role="alert">
          This Post Reacted By {post.reactions.likes} likes and{" "}
          {post.reactions.dislikes} Dislike People
        </div>
      </div>
    </div>
  );
};
export default Post;
